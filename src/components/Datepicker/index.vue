<template>
    <div class="cover" @click="close">
    </div>
    <picker :slots="dateSlots" @change="onChange" v-ref="picker">
      <button class="cancel" @click="close">取消</button>
      <button class="ok" @click="confirm">确定</button>
    </picker>
</template>
<script>
  import picker from './index-picker'
  export default {
    created: function () {
      this.generateSlots();
    },
    components: {
      picker
    },
    props: {
      type: {
        type: String,
        default: 'date'
      },
      value: null
    },
    data () {
      return {
        dateSlots: [],
        selfTriggered: false
      }
    },
    computed: {
      typeStr() {
        if (this.type === 'time') {
          return 'Hm';
        } else if (this.type === 'date') {
          return 'YMD';
        } else {
          return 'YMDHm';
        }
      }
    },
    methods: {
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
      },

      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1;
      },

      getMonthEndDay(year, month) {
        if (this.isShortMonth(month)) {
          return 30;
        } else if (month === 2) {
          return this.isLeapYear(year) ? 29 : 28;
        } else {
          return 31;
        }
      },

      getTrueValue(formattedValue) {
        if (!formattedValue) return;
        while (isNaN(parseInt(formattedValue, 10))) {
          formattedValue = formattedValue.slice(1);
        }
        return parseInt(formattedValue, 10);
      },

      getValue(values) {
        let value;
        if (this.type === 'time') {
          value = values.map(value => ('0' + this.getTrueValue(value)).slice(-2)).join(':');
        } else {
          let year = this.getTrueValue(values[0]);
          let month = this.getTrueValue(values[1]);
          let date = this.getTrueValue(values[2]);
          let maxDate = this.getMonthEndDay(year, month);
          if (date > maxDate) {
            this.selfTriggered = true;
            date = 1;
          }
          let hour = this.typeStr.indexOf('H') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('H')]) : 0;
          let minute = this.typeStr.indexOf('m') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('m')]) : 0;
          value = new Date(year, month - 1, date, hour, minute);
        }
        return value;
      },

      onChange(picker) {
        let values = picker.$children.filter(child => child.value !== undefined).map(child => child.value);
        if (this.selfTriggered) {
          this.selfTriggered = false;
          return;
        }
        //console.log(values)
        this.value = this.getValue(values);
      },
      close () {
        this.$dispatch('hidePicker')
      },
      confirm () {
        this.$dispatch('hidePicker', this.value)
      },
      generateSlots () {
        let yearList = []
        let monthList = []
        let dateList = []
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        for (let i = 0; i < 50; i++) {
          yearList.splice(i, 0, year - 50 + i)
        }
        yearList.push(year)
        for (let i = 0; i < 49; i++) {
          yearList.splice(51 + i, 0, year + i)
        }
        for (let i = 1; i <= 12; i++) {
          monthList.push(i)
        }
        for (let i = 1; i <= 31; i++) {
          dateList.push(i)
        }
        this.dateSlots.push({
          values: yearList,
          value: '',
          suffix: '年'
        })
        this.dateSlots.push({
          values: monthList,
          value: '',
          suffix: '月'
        })
        this.dateSlots.push({
          values: dateList,
          value: '',
          suffix: '日'
        })
      }
    }
  }
</script>
<style lang='css' scoped>
    .cover{ z-index:999; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity:0.3;}
    .cancel{ font-size: 17px; line-height: 44px; color: #007AFF; outline: none; border: none; background: #F2F2F4; float: left;}
    .ok{ font-size: 17px; line-height: 44px; color: #007AFF; outline: none; border: none; background: #F2F2F4; float: right; }
</style>
