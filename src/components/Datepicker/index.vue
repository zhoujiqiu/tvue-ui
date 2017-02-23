<template>
    <div class="cover" @click="close"></div>
    <div class="timepicker">
      <div class="timepicker_header">
        <button @click="close"></button>
        <label>选择优惠时间</label>
      </div>
      <div class="timepicker_info">
        <div class="year">
          <span>{{calendar.year}}年</span>
        </div>
        <div class="month">
          <img src="../img/date_left.png" @click="moveMonth(-1)">
          <span>{{calendar.month}}月</span>
          <img src="../img/date_right.png" @click="moveMonth(1)">
        </div>
        <ul class="date">
          <li v-for="item in calendar.dateList" :class="elementClass($index)" @click="onDateClick($index)">
            <span v-if="item.numText" v-html="item.numText"></span>
          </li>             
        </ul>
      </div>
      <div class="button_box_plat">
          <div class="ok_btn"><button @click="confirm">确定</button></div>
      </div>
    </div>
</template>
<script>
  export default {
    ready: function () {
      window.alert(1)
      this.init()
      if (this.$parent.pData && this.$parent.pData.bpPeriodBegin) {
        this.timpSpan.fromUtcTime = this.$parent.pData.bpPeriodBegin
        this.timpSpan.fromDate = this.utc2str(this.$parent.pData.bpPeriodBegin)
        if (this.$parent.pData.bpPeriodBegin !== this.$parent.pData.bpPeriodEnd) {
          this.timpSpan.toUtcTime = this.$parent.pData.bpPeriodEnd
          this.timpSpan.toDate = this.utc2str(this.$parent.pData.bpPeriodEnd)
        }
        let newDate = new Date(this.$parent.pData.bpPeriodBegin)
        this.generateData(newDate)
      }
      // console.log('this.$parent', this.$parent.pData.bpPeriodBegin, this.$parent.pData.bpPeriodEnd)
      // console.log('this.$parent', this.$parent.pData.bpPeriodBeginText, this.$parent.pData.bpPeriodEndText)
      // console.log('this', this.timpSpan.fromDate, this.timpSpan.toDate)
    },
    data () {
      return {
        calendar: {year: '',
                   month: '',
                   dateList: [],
                   dayOfFirstDate: 0,
                   today: '',
                   todayIndex: -1
                   },
        timpSpan: {fromDate: '',
                   toDate: '',
                   fromUtcTime: '',
                   toUtcTime: ''
                  }
      }
    },
    methods: {
      fillZero (num) {
        return num <= 9 ? '0' + num : '' + num
      },
      utc2str (timestamp) {
        var dateTime = new Date(timestamp)
        var year = dateTime.getFullYear()
        var month = dateTime.getMonth() + 1
        var date = dateTime.getDate()
        var d = year + this.fillZero(month) + this.fillZero(date)
        return d
      },
      generateData (newData) {
        var year = newData.getFullYear()
        var month = newData.getMonth() + 1
        var isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
        var firstDate = 1
        var lastDate = 30
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
          lastDate = 31
        } else if (month === 2) {
          lastDate = isLeap ? 29 : 28 // 闰年29号,平年28号
        }
        var dayOfFirstDate = (new Date(year, month - 1, 1)).getDay()
        var dateList = []
        var dateListIndex = dayOfFirstDate
        var isCurrentMonth = this.calendar.today.substr(0, 6) === ('' + year + this.fillZero(month))
        var todayIndex = -1
        for (let i = 0; i < dayOfFirstDate; i++) {
          dateList.push({num: 0,
                         numText: 0
                         })
        }
        for (let i = firstDate; i <= lastDate; i++) {
          let date = '' + year + this.fillZero(month) + this.fillZero(i)
          let numText = i
          let isToday = 0
          if (isCurrentMonth && date === this.calendar.today) {
            numText = '今天'
            isToday = 1
            todayIndex = dateListIndex
          }
          if (date === this.timpSpan.fromDate) {
            numText += '<br>开始'
          }
          if (date === this.timpSpan.toDate) {
            numText += '<br>结束'
          }
          dateList.push({num: i,
                         numText: numText,
                         isToday: isToday,
                         date: date,
                         utcTime: (new Date(year, month - 1, i)).getTime(),
                         isWeekEnd: (dateListIndex % 7 === 0) || ((dateListIndex + 1) % 7 === 0),
                         isBegin: (date === this.timpSpan.fromDate ? 1 : 0),
                         isEnd: (date === this.timpSpan.toDate ? 1 : 0),
                         isDuration: (this.timpSpan.fromDate && this.timpSpan.toDate && date > this.timpSpan.fromDate && date < this.timpSpan.toDate ? 1 : 0)
                         })
          dateListIndex++
        }
        this.calendar.year = year
        this.calendar.month = month
        this.calendar.dateList = dateList
        this.calendar.dayOfFirstDate = dayOfFirstDate
        this.calendar.todayIndex = todayIndex
        // console.log('this.calendar', JSON.parse(JSON.stringify(this.calendar)))
      },
      init () {
        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth() + 1
        var date = now.getDate()
        var today = '' + year + this.fillZero(month) + this.fillZero(date)
        this.calendar.today = today
        this.generateData(now)
      },
      moveMonth (step) {
        var oldMonth
        var newMonth
        if (step === -1) {
          if (this.calendar.today.substr(0, 6) === this.calendar.dateList[this.calendar.dateList.length - 1].date.substr(0, 6)) {
            console.log('cannot move berfore')
            return
          }
          oldMonth = new Date(this.calendar.year, this.calendar.month - 1, 1)
          newMonth = oldMonth.getTime() - 24 * 3600 * 1000
        } else {
          oldMonth = new Date(this.calendar.year, this.calendar.month - 1, this.calendar.dateList[this.calendar.dateList.length - 1].num)
          newMonth = oldMonth.getTime() + 24 * 3600 * 1000
        }
        var newDate = new Date(newMonth)
        this.generateData(newDate)
      },
      elementClass (index) {
        if (this.calendar.dateList[index].isBegin) {
          return 'begin'
        } else if (this.calendar.dateList[index].isEnd) {
          return 'end'
        } else if (this.calendar.dateList[index].isDuration) {
          return 'duration'
        } else if (this.calendar.dateList[index].isWeekEnd) {
          return 'weekend'
        } else {
          return ''
        }
      },
      date2index (date) {
        var index = -1
        for (let i = 0; i < this.calendar.dateList.length; i++) {
          if (date === this.calendar.dateList[i].date) {
            index = i
            break
          }
        }
        return index
      },
      onDateClick (index) {
        if (index >= this.calendar.dayOfFirstDate && index >= this.calendar.todayIndex) {
          console.log(index)
          if (!this.timpSpan.fromDate) {
            this.timpSpan.fromDate = this.calendar.dateList[index].date
            this.timpSpan.fromUtcTime = this.calendar.dateList[index].utcTime
            this.calendar.dateList[index].numText = this.calendar.dateList[index].isToday ? '今天<br>开始' : this.calendar.dateList[index].num + '<br>开始'
            this.calendar.dateList[index].isBegin = 1
          } else if (!this.timpSpan.toDate) {
            if (this.timpSpan.fromDate === this.calendar.dateList[index].date) {
            } else {
              let oldIndex = this.date2index(this.timpSpan.fromDate)
              let fromIndex, toIndex
              if (this.timpSpan.fromDate < this.calendar.dateList[index].date) {
                this.timpSpan.toDate = this.calendar.dateList[index].date
                this.timpSpan.toUtcTime = this.calendar.dateList[index].utcTime
                this.calendar.dateList[index].numText = this.calendar.dateList[index].num + '<br>结束'
                this.calendar.dateList[index].isEnd = 1
                fromIndex = Math.max(this.calendar.dayOfFirstDate, oldIndex + 1)
                for (let i = fromIndex; i < index; i++) {
                  this.calendar.dateList[i].isDuration = 1
                }
              } else {
                this.timpSpan.toDate = this.timpSpan.fromDate
                this.timpSpan.toUtcTime = this.timpSpan.fromUtcTime
                if (oldIndex > -1) {
                  this.calendar.dateList[oldIndex].numText = this.calendar.dateList[oldIndex].num + '<br>结束'
                  this.calendar.dateList[oldIndex].isEnd = 1
                  this.calendar.dateList[oldIndex].isBegin = 0
                }
                this.timpSpan.fromDate = this.calendar.dateList[index].date
                this.timpSpan.fromUtcTime = this.calendar.dateList[index].utcTime
                this.calendar.dateList[index].numText = this.calendar.dateList[index].isToday ? '今天<br>开始' : this.calendar.dateList[index].num + '<br>开始'
                this.calendar.dateList[index].isBegin = 1
                // toIndex = Math.max(oldIndex, this.calendar.dateList.length)
                toIndex = oldIndex > -1 ? oldIndex : this.calendar.dateList.length
                for (let i = index + 1; i < toIndex; i++) {
                  this.calendar.dateList[i].isDuration = 1
                }
              }
            }
          } else {
            let oldIndexFrom = this.date2index(this.timpSpan.fromDate)
            let oldIndexTo = this.date2index(this.timpSpan.toDate)
            this.timpSpan.fromDate = ''
            this.timpSpan.toDate = ''
            if (oldIndexFrom > -1) {
              this.calendar.dateList[oldIndexFrom].numText = this.calendar.dateList[oldIndexFrom].isToday ? '今天' : this.calendar.dateList[oldIndexFrom].num
              this.calendar.dateList[oldIndexFrom].isBegin = 0
            }
            if (oldIndexTo > -1) {
              this.calendar.dateList[oldIndexTo].numText = this.calendar.dateList[oldIndexTo].num
              this.calendar.dateList[oldIndexTo].isEnd = 0
            }
            for (let i = this.calendar.dayOfFirstDate; i < this.calendar.dateList.length; i++) {
              this.calendar.dateList[i].isDuration = 0
            }
            this.timpSpan.fromDate = this.calendar.dateList[index].date
            this.timpSpan.fromUtcTime = this.calendar.dateList[index].utcTime
            this.calendar.dateList[index].numText = this.calendar.dateList[index].isToday ? '今天<br>开始' : this.calendar.dateList[index].num + '<br>开始'
            this.calendar.dateList[index].isBegin = 1
          }
        } else {
          if (index >= this.calendar.dayOfFirstDate) {
            this.openDialog('当天之前的日期不能选择', 1)
          }
        }
        console.log('fromDate:', this.timpSpan.fromDate, ',toDate:', this.timpSpan.toDate)
      },
      close () {
        console.log('hideTimePicker') // this.$emit('hideTimePicker')
        this.$dispatch('hideTimePicker', '')
      },
      confirm () {
        if (!this.timpSpan.fromDate) {
          this.openDialog('未设置优惠时间', 1)
        }
        if (!this.timpSpan.toDate) {
          // this.openDialog('未设置结束时间', 1)
          this.timpSpan.toDate = this.timpSpan.fromDate
          this.timpSpan.toUtcTime = this.timpSpan.fromUtcTime
        }
        if (this.timpSpan.fromDate && this.timpSpan.toDate) {
          console.log('hideTimePicker') // this.$emit('hideTimePicker')
          this.$dispatch('hideTimePicker', this.timpSpan)
        }
      },
      openDialog (cont, type) {
        this.$dispatch('report', {cont: cont, type: type})
      }
    }
  }
</script>
<style lang="less">
  .cover{ width:100%; height:100%; position:fixed; top:0;left:0; z-index:2000; background-color:#000; opacity:0.5; }
  .timepicker{z-index: 3001;position:fixed;bottom:0;right:0; background:#fff; width: 100%;}
  .timepicker_header{ padding: 14px 0; overflow: hidden; border-bottom: 1px solid #dddee3;}
  .timepicker_header label{ display: block; line-height: 15px; text-align: center; font-size: 15px; color: #8c8c8c;}
  .timepicker_header button{display: block; float: right; margin-right: 15px; width: 10px; height: 10px; background: url(../img/close_window.png) no-repeat 0 50%; background-size: 10px 10px;}
  .timepicker_info{}
  .timepicker_info .year{ margin-top: 20px; text-align: center;}
  .timepicker_info .year span{display: block; line-height: 15px; font-size: 12px; color: #333333; }
  .timepicker_info .month{ margin-top: 10px; text-align: center; }
  .timepicker_info .month span{ display: inline-block; line-height: 15px; margin: 0 50px; font-size: 15px; color: #333333; vertical-align: middle;}
  .timepicker_info .month img{ display: inline-block; width: 9px; height: 15px; vertical-align: middle;}
  .timepicker_info .date{ margin: 20px auto 0; overflow: hidden; width: 91.5%; text-align: center;}
  .timepicker_info .date li{ display: table-cell; float: left; width: 14.28%; height: 45px;  padding: 0px; margin-bottom: 9px;}
  .timepicker_info .date li span{display: block; font-size: 14px; color: #333333; line-height: 17px; height: 45px; margin-top: 5.5px;}
  .timepicker_info .date li.weekend{ }
  .timepicker_info .date li.weekend span{ color: #f85800; }
  .timepicker_info .date li.duration{ background-color: #fff3f4; }
  .timepicker_info .date li.duration span { color: #ff5f71; }
  .timepicker_info .date li.begin{ background-color: #ff5f71;  border-radius: 4px 0 0 4px; }
  .timepicker_info .date li.begin span{ color: #ffffff; }
  .timepicker_info .date li.end{ background-color: #ff5f71; border-radius: 0 4px 4px 0; }
  .timepicker_info .date li.end span{ color: #ffffff;}
  .button_box_plat{ width:100%; /*background:#fff;*/padding:2px 0px 10px;}
  .button_box_plat .ok_btn{padding:0 15px;}
  .button_box_plat .ok_btn button{display:block;width:100%;margin:0 auto;height:44px;background:#ff5f71;color:#fff;text-align:center;line-height:2.5rem;   font-size: 1.42rem;-moz-border-radius:4px;-webkit-border-radius: 4px;border-radius:4px;}
</style>
