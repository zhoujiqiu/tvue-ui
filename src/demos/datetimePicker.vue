<template>
  <div class="dialog-demo">
    <div class="des">DatetimePicker</div>
    <m-button text="点击弹出 DatePicker" type="primary" @click="onClickPicker"></m-button>
    <m-button text="点击弹出 DateCalendar" type="primary" @click="onClickCalendar"></m-button>
    <!-- <m-button text="点击弹出 DateSpan" type="primary"></m-button> -->
    
    <c-datepicker v-if="pickerShow" v-bind:msg="pickerParams"></c-datepicker>
    <c-datecalendar v-if="calendarShow" v-bind:msg="calendarParams"></c-datecalendar>

  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import cDatecalendar from '../components/DateCalendar/index.vue'
import cDatepicker from '../components/DatePicker/index.vue'

export default {
  data () {
    return {
      pickerShow: false,
      pickerParams: {},
      calendarShow: false,      
      calendarParams: {}
    }
  },
  components: {
    MButton,
    cDatecalendar,
    cDatepicker
  },
  methods: {
    onClickPicker: function() {
      this.pickerShow = {}
      this.pickerParams = true
      /*this.visible2 = true*/
    },
    onClickCalendar: function() {
      this.calendarParams = {}
      this.calendarShow = true
    }
  },
  events: {
    hidePicker: function (data) {
      this.pickerShow = false
      if (data) {
        let d = new Date(data)
        alert(d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日')
      }
    },
    hideCalendar: function (data) {
      this.calendarShow = false
      if (data.fromDate) {
        alert(data.fromDate)
      }
    }
  }
}
</script>
<style>
.des {
  text-align: center;
  font-size: 18px;
}
.dialog-demo{
  padding:0 30px;
}

@component-namespace page {
  @component datetime {
    @descendent wrapper {
      padding: 0 20px;
      position: absolute 50% * * *;
      width: 100%;
      transform: translateY(-50%);

      button:not:(last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
