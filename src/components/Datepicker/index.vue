<template>
  <div>
    <div class="cover" @click="close">
    </div>
    <picker :slots="dateSlots" @change="onChange" v-ref:picker>
      <button class="cancel" @click="close">取消</button>
      <button class="ok" @click="confirm">确定</button>
    </picker>
  </div>
</template>
<script>
  import picker from './index-picker'
  const FORMAT_MAP = {
    Y: 'year',
    M: 'month',
    D: 'date',
    H: 'hour',
    m: 'minute'
  };
  export default {
    created: function () {
      /*this.generateSlots_Old();*/
      if (!this.value) {
        if (this.type.indexOf('date') > -1) {
          // this.value = this.startDate;
          this.value = new Date()
        } else {
          this.value = `${ ('0' + this.startHour).slice(-2) }:00`;
        }
      }
      this.generateSlots();
    },
    components: {
      picker
    },
    props: {
      value: null,
      type: {
        type: String,
        default: 'date'
      },
      yearFormat: {
        type: String,
        default: '{value}'
      },
      monthFormat: {
        type: String,
        default: '{value}'
      },
      dateFormat: {
        type: String,
        default: '{value}'
      },
      hourFormat: {
        type: String,
        default: '{value}'
      },
      minuteFormat: {
        type: String,
        default: '{value}'
      },
      startDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() - 50, 0, 1);
        }
      },
      endDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() + 49, (12 - 1), 31);
        }
      },
      startHour: {
        type: Number,
        default: 0
      },
      endHour: {
        type: Number,
        default: 23
      }
    },
    data () {
      return {
        dateSlots: [],
        selfTriggered: false
      }
    },
    computed: {
      rims() {
        if (!this.value) return { year: [], month: [], date: [], hour: [], min: [] };
        let result;
        if (this.type === 'time') {
          result = {
            hour: [this.startHour, this.endHour],
            min: [0, 59]
          };
          return result;
        }
        result = {
          year: [this.startDate.getFullYear(), this.endDate.getFullYear()],
          month: [1, 12],
          date: [1, this.getMonthEndDay(this.getYear(this.value), this.getMonth(this.value))],
          hour: [0, 23],
          min: [0, 59]
        };
        this.rimDetect(result, 'start');
        this.rimDetect(result, 'end');
        return result;
      },
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
    watch: {
      value() {
        this.handleExceededValue();
      },
      rims(val, oldVal) {
        let same = Object.keys(val).every(key => val[key][0] === oldVal[key][0] &&
          val[key][1] === oldVal[key][1]);
        if (!same) {
          this.generateSlots();
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
            date = maxDate;
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
        // console.log('aaa', values)
        this.value = this.getValue(values);
      },
      close () {
        this.$dispatch('hidePicker')
      },
      confirm () {
        // console.log('this.value', this.value)
        this.$dispatch('hidePicker', this.value)
      },
      setSlotsByValues(values) {
        const setSlotValue = this.$refs.picker.setSlotValue;
        if (this.type === 'time') {
          setSlotValue(0, values[0]);
          setSlotValue(1, values[1]);
        }
        if (this.type !== 'time') {
          setSlotValue(0, values[0]);
          setSlotValue(1, values[1]);
          setSlotValue(2, values[2]);
          if (this.type === 'datetime') {
            setSlotValue(3, values[3]);
            setSlotValue(4, values[4]);
          }
        }
        [].forEach.call(this.$refs.picker.$children, child => child.doOnValueChange());
      },
      handleExceededValue() {
        let values = [];
        if (this.type === 'time') {
          values = this.value.split(':');
        } else {
          values = [
            /*this.yearFormat.replace('{value}', this.getYear(this.value)),
            this.monthFormat.replace('{value}', ('0' + this.getMonth(this.value)).slice(-2)),
            this.dateFormat.replace('{value}', ('0' + this.getDate(this.value)).slice(-2))*/
            this.value.getFullYear(),
            this.value.getMonth() + 1,
            this.value.getDate()
          ];
          if (this.type === 'datetime') {
            values.push(
                this.hourFormat.replace('{value}', ('0' + this.getHour(this.value)).slice(-2)),
                this.minuteFormat.replace('{value}', ('0' + this.getMinute(this.value)).slice(-2))
            );
          }
        }
        this.dateSlots.filter(child => child.values !== undefined)
          .map(slot => slot.values).forEach((slotValues, index) => {
            if (slotValues.indexOf(values[index]) === -1) {

              values[index] = slotValues[0];
            }
          });
        /// console.log('bbb', values)
        this.$nextTick(() => {
          this.setSlotsByValues(values);
        });
      },
      isDateString(str) {
        return /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str);
      },
      getYear(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
      },
      getMonth(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
      },
      getDate(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
      },
      getHour(value) {
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00';
          return str.split(':')[0];
        }
        return value.getHours();
      },
      getMinute(value) {
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00';
          return str.split(':')[1];
        }
        return value.getMinutes();
      },
      rimDetect(result, rim) {
        let position = rim === 'start' ? 0 : 1;
        let rimDate = rim === 'start' ? this.startDate : this.endDate;
        if (this.getYear(this.value) === rimDate.getFullYear()) {
          result.month[position] = rimDate.getMonth() + 1;
          if (this.getMonth(this.value) === rimDate.getMonth() + 1) {
            result.date[position] = rimDate.getDate();
            if (this.getDate(this.value) === rimDate.getDate()) {
              result.hour[position] = rimDate.getHours();
              if (this.getHour(this.value) === rimDate.getHours()) {
                result.min[position] = rimDate.getMinutes();
              }
            }
          }
        }
      },
      generateSlots() {
        let dateSlots = [];
        const INTERVAL_MAP = {
          Y: this.rims.year,
          M: this.rims.month,
          D: this.rims.date,
          H: this.rims.hour,
          m: this.rims.min
        };
        const SUFFIX_MAP = {
          Y: '年',
          M: '月',
          D: '日',
          H: '时',
          m: '分'
        }
        let VAL_MAP = {
          Y: this.value.getFullYear(),
          M: this.value.getMonth() + 1,
          D: this.value.getDate(),
          H: this.value.getHours(),
          m: this.value.getMinutes()
        }
        // console.log('VAL_MAP', VAL_MAP)
        let typesArr = this.typeStr.split('');
        typesArr.forEach(type => {
          if (INTERVAL_MAP[type]) {
            this.pushSlots.apply(null, [dateSlots, type, SUFFIX_MAP[type], VAL_MAP[type]].concat(INTERVAL_MAP[type]));
          }
        });
        if (this.typeStr === 'Hm') {
          dateSlots.splice(1, 0, {
            divider: true,
            content: ':'
          });
        }
        this.dateSlots = dateSlots;
        // console.log('this.dateSlots', JSON.parse(JSON.stringify(this.dateSlots)))
        this.handleExceededValue();
      },
      pushSlots(slots, type, suffix, val, start, end) {
        slots.push({
          /*flex: 1,*/
          value: val,
          suffix: suffix,
          values: this.fillValues(type, start, end)
        });
      },
      fillValues(type, start, end) {
        let values = [];
        for (let i = start; i <= end; i++) {
          /*if (i < 10) {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', ('0' + i).slice(-2)));
          } else {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', i));
          }*/
          values.push(i);
        }
        return values;
      },
      generateSlots_Old () {
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
        for (let i = 0; i < 50; i++) {
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
          value: year,
          suffix: '年'
        })
        this.dateSlots.push({
          values: monthList,
          value: month,
          suffix: '月'
        })
        this.dateSlots.push({
          values: dateList,
          value: date,
          suffix: '日'
        }),
        this.value = now
      }
    }
  }
</script>
<style lang='css' scoped>
    .cover{ z-index:999; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity:0.3;}
    .cancel{ font-size: 17px; line-height: 44px; color: #007AFF; outline: none; border: none; background: #F2F2F4; float: left;}
    .ok{ font-size: 17px; line-height: 44px; color: #007AFF; outline: none; border: none; background: #F2F2F4; float: right; }
</style>
