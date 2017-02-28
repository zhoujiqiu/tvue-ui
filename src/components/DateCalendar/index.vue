<template>
    <div class="cover" @click="close"></div>
    <div class="timepicker">
      <div class="timepicker_info">
        <div class="month">
          <button class="moveleft" @click="moveMonth(-1)"></button>
          <span class="month_txt">{{calendar.year}}年{{calendar.month}}月</span>
          <button class="moveright" @click="moveMonth(1)"></button>
          <ul class="date">
            <li v-for="item in weekday" class="weekday"><span>{{item}}</span></li>             
          </ul>
        </div>
        <ul class="date">
          <li v-for="item in calendar.dateList" :class="elementClass($index)" @click="onDateClick($index)">
            <span v-if="item.numText" v-html="item.numText"></span>
            <i v-if="item.isBegin"></i>
          </li>             
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    ready: function () {
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
    },
    data () {
      return {
        weekday: ['日', '一', '二', '三', '四', '五', '六'],
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
        if (dayOfFirstDate) {
          let preMonthTime = (new Date(year, month - 1, 1)).getTime() - dayOfFirstDate * 24 * 60 * 60 * 1000
          for (let i = 0; i < dayOfFirstDate; i++) {
            let preMonthDate = new Date(preMonthTime)
            let date = '' + preMonthDate.getFullYear() + this.fillZero(preMonthDate.getMonth() + 1) + this.fillZero(preMonthDate.getDate())
            dateList.push({num: preMonthDate.getDate(),
                           numText: preMonthDate.getDate(),
                           isToday: false,
                           date: date,
                           utcTime: preMonthTime,
                           isWeekEnd: 0,
                           isBegin: (date === this.timpSpan.fromDate ? 1 : 0),
                           isEnd: (date === this.timpSpan.toDate ? 1 : 0),
                           isDuration: (this.timpSpan.fromDate && this.timpSpan.toDate && date > this.timpSpan.fromDate && date < this.timpSpan.toDate ? 1 : 0),
                           isPreMonth: true
                          })
            preMonthTime += 24 * 60 * 60 * 1000
          }
        }
        for (let i = firstDate; i <= lastDate; i++) {
          let date = '' + year + this.fillZero(month) + this.fillZero(i)
          let numText = i
          let isToday = 0
          if (isCurrentMonth && date === this.calendar.today) {
            // numText = '今天'
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
        } else if (this.calendar.dateList[index].isPreMonth) {
          return 'preMonth'
        } else if (this.calendar.dateList[index].isToday) {
          return 'today'
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
        // console.log('index', index)
        if (this.timpSpan.fromDate) {
          let oldIndex = this.date2index(this.timpSpan.fromDate)
          if (oldIndex > -1) {
            this.calendar.dateList[oldIndex].isBegin = 0
          }
        }
        this.timpSpan.fromDate = this.calendar.dateList[index].date
        this.timpSpan.fromUtcTime = this.calendar.dateList[index].utcTime
        this.calendar.dateList[index].isBegin = 1
        // console.log(JSON.parse(JSON.stringify(this.calendar.dateList[index])))
      },
      close () {
        // console.log('hideCalendar') // this.$emit('hideTimePicker')
        this.$dispatch('hideCalendar', this.timpSpan)
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
          // console.log('hideCalendar') // this.$emit('hideTimePicker')
          this.$dispatch('hideCalendar', this.timpSpan)
        }
      },
      openDialog (cont, type) {
        console.log('report', {cont: cont, type: type})
      }
    }
  }
</script>
<style lang='less' scoped>
    .cover{ z-index:999; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #000000; -moz-opacity: 0.3; opacity:0.3; filter: alpha(opacity=30);}
    .timepicker{z-index: 1000;position:absolute;bottom:0;right:0; background-color: white; width: 100%;}
    .timepicker_info{}
    .timepicker_info .month{ padding: 17px 0 0 0; text-align: center; background: #199ADD; }
    .timepicker_info .month .month_txt{ display: inline-block; line-height: 15px; margin: 0 27px; font-size: 15px; color: #fff; vertical-align: middle;}
    .timepicker_info .month button{ display: inline-block; width: 8px; height: 15px; vertical-align: middle; outline: none; border: 0;}
    .timepicker_info .month button.moveleft{
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAAXNSR0IArs4c6QAAANBJREFUOBHFlckNwkAMRQn9EJY+WJuEPtICDeTMcgcOw/sskpVDNHZGYMmKIuX9b1vjSTUKREppAnYgGzcOXJMnUtG6BAAsfOd9ky3wgc88FYJ3HngKYOHtz+BZx9nV82D4grtCA1t7ep4D/B++UcXKU/YC4EoqBsPLbGd9iOPx5ft29sHwY2lIiKhIvfsCd9u/b8O+ViVF7AHKP/emku4pLCKSv/s9lYREtM52JmGR2FVm2onfhz0i+TdyaRH7Y3kw5NBgrUirDXQHzjXQnmyePv3vTZmvq00AAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: contain;
      background-color: #199ADD;
    }
    .timepicker_info .month button.moveright{
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAAAXNSR0IArs4c6QAAAXNJREFUSA2dlVtHBWEUhqdz2+4gnSXRj+giii76Wd10E1GUKIokSdKBuoiILlJEREok0S9Iiq6m52PHa8/aM99q8Zp31l7vM5s5rCSpVJqm0+gQtfz13EfCU+gbhTpBzf+BTBL8CgSpI3yTC0bgTABq9zlpjIYx3I6ulSB+F9/ggXUSuBWA2m1O6j2wLgJ3ShC/ia/zwLoJ3AtA7boX1kPgQQniV6P/VRgk2IceBaB22QsbIP2sBPGLXtgQ4RcBqJ33woZJvypB/JwXNkL4TQBqZ72wUdLvShA/E//EJskPVw6yqmw1Mz2uPIhq3cGFTMBqAOhHT8iqJSuT6ZHsRbWe8pVMwGoAyHvv1vi9+CVmKO9LsBELyfs2bQEpvtMMdaAbZNUOzShIG4NXFoHeHir+5DJURpfIqgOaxUuAoRK6sAj0jlHcWmIwrB2rTmnGL0qGx9BHFSnsOv/qJjSOPiuwc46t1kMa1SM8gcLeL0UFqoZ+Ae+fSN0mT1kDAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: contain;
      background-color: #199ADD;
    }
    .timepicker_info .date{ margin: 0 auto; overflow: hidden; width: 91.5%; text-align: center;}
    .timepicker_info .date li{ display: table-cell; float: left; width: 14.28%; height: 44px; position: relative;}
    .timepicker_info .date li i{ position: absolute; bottom: 5px; display: block; width: 4px; height: 4px; background: #fff; border-radius: 100%; left:50%; transform: translateX(-50%);}
    .timepicker_info .date li span{display: block; font-size: 14px; color: #000; line-height: 44px; width: 44px; margin: 0 auto; }
    .timepicker_info .date li.weekday{ }
    .timepicker_info .date li.weekday span{ color: #fff; }
    .timepicker_info .date li.preMonth{ }
    .timepicker_info .date li.preMonth span{ color: #777E8C; }
    .timepicker_info .date li.today{ }
    .timepicker_info .date li.today span{ color: #199ADD;}
    .timepicker_info .date li.weekend{ }
    .timepicker_info .date li.weekend span{ color: #000; }
    .timepicker_info .date li.duration{ }
    .timepicker_info .date li.duration span { }
    .timepicker_info .date li.begin{ }
    .timepicker_info .date li.begin span{ color: #fff; background: #199ADD;  border-radius: 100%; }
    .timepicker_info .date li.end{ }
    .timepicker_info .date li.end span{  }
</style>
