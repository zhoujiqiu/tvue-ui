<template>
  <div class="dialog-demo">
    <div class="des">DatetimePicker</div>
    <m-button text="点击弹出 DatePicker" type="primary"></m-button>
    <m-button text="点击弹出 DateCalendar" type="primary" @click="showDateCalendar"></m-button>
    <m-button text="点击弹出 DateSpan" type="primary"></m-button>
    
    <c-datecalendar v-if="isShowDateCalendar" v-bind:msg="dateCalendarData"></c-datecalendar>

  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import cDatecalendar from '../components/DateCalendar/index.vue'

export default {
  data () {
    return {
      isShowDateCalendar: false,
      dateCalendarData: {
      }
    }
  },
  components: {
    MButton,
    cDatecalendar
  },
  methods: {
    showDateCalendar: function() {
      this.dateCalendarData = {
      }
      this.isShowDateCalendar = true
    }
  },
  events: {
    hideTimePicker: function (data) {
      this.isShowDateCalendar = false
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
</style>
