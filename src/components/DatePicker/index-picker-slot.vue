<template>
  <div class="picker-slot">
    <div class="picker-slot-wrapper" v-el:wrapper>
      <div class="picker-item" v-for="itemValue in values" :class="{'picker-selected': itemValue == value}">
        <span class="txt" :style="setStyle($index)">{{itemValue}}</span>
        <span class="picker-selected-suffix" v-if="itemValue == value">{{suffix}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import draggable from './draggable'
  import translateUtil from './translate'
  // import { once } from 'wind-dom/src/event'
  // import { addClass, removeClass } from 'wind-dom/src/class'
  // import 'raf.js'
  const ITEM_HEIGHT = 30;
  export default {
    ready: function () {
      this.initEvents()
      // this.doOnValueChange()
    },
    props: {
      values: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
      },
      valIndex: {
        type: Number,
        default: 3
      },
      visibleItemCount: {
        type: Number,
        default: 7
      },
      suffix: {
        type: String
      }
    },
    data () {
      return {
      }
    },
    computed: {
      dragRange () {
        var values = this.values
        var visibleItemCount = this.visibleItemCount
        return [ -ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2) ]
      }
    },
    watch: {
      value() {
        this.doOnValueChange()
        if (this.rotateEffect) {
          this.planUpdateRotate
        }
        console.log('valueChanged', this.value, this.valIndex)
        this.$dispatch('slotValueChanged', this)
      }
    },
    methods: {
      setStyle (index) {
        var diff = Math.abs(index - this.valIndex)
        var fontSize = (diff - 1) > -1 ? (diff - 1) : 0
        fontSize *= diff
        fontSize = diff < 5 ? (21 - fontSize) : 15
        return 'font-size: ' + fontSize + 'px'
      },
      value2Translate(value) {
        var values = this.values;
        var valueIndex = values.indexOf(value);
        var offset = Math.floor(this.visibleItemCount / 2)

        if (valueIndex !== -1) {
          this.valIndex = valueIndex
          return (valueIndex - offset) * -ITEM_HEIGHT
        }
      },
      translate2Value (translate) {
        translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
        var index = -(translate -  ITEM_HEIGHT * Math.floor(this.visibleItemCount / 2)) / ITEM_HEIGHT;
        this.valIndex = index
        return this.values[index];
      },
      doOnValueChange () {
        var value = this.value
        var wrapper = this.$els.wrapper
        translateUtil.translateElement(wrapper, null, this.value2Translate(value))
      },
      initEvents () {
        var el = this.$els.wrapper
        var dragState = {}

        var velocityTranslate, prevTranslate, pickerItems

        draggable(el, {
          start: (event) => {
            cancelAnimationFrame(this.animationFrameId)
            this.animationFrameId = null
            dragState = {
              range: this.dragRange,
              start: new Date(),
              startLeft: event.pageX,
              startTop: event.pageY,
              startTranslateTop: translateUtil.getElementTranslate(el).top
            };
            pickerItems = el.querySelectorAll('.picker-item')
            // console.log('start', dragState)
          },

          drag: (event) => {
            this.dragging = true

            dragState.left = event.pageX
            dragState.top = event.pageY

            var deltaY = dragState.top - dragState.startTop
            var translate = dragState.startTranslateTop + deltaY

            translateUtil.translateElement(el, null, translate)

            velocityTranslate = translate - prevTranslate || translate

            prevTranslate = translate

            if (this.rotateEffect) {
              this.updateRotate(prevTranslate, pickerItems)
            }
          },

          end: () => {
            this.dragging = false

            var momentumRatio = 7
            var currentTranslate = translateUtil.getElementTranslate(el).top
            var duration = new Date() - dragState.start

            var momentumTranslate
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio
            }

            var dragRange = dragState.range

            Vue.nextTick(() => {
              var translate
              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT
              } else {
                translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0])

              translateUtil.translateElement(el, null, translate)

              this.value = this.translate2Value(translate)
              // console.log(this.value)

              if (this.rotateEffect) {
                this.planUpdateRotate()
              }
            })

            dragState = {}
          }
        })
      }
    }
  }
</script>
<style lang='css' scoped>
    .picker-slot{ flex-grow: 1;}
    .picker-slot .picker-slot-wrapper{  }
    .picker-slot .picker-slot-wrapper .picker-item{ text-align: center; line-height: 30px;height: 30px;}
    .picker-slot .picker-slot-wrapper .picker-item .txt{ display: inline-block; width: 48px; text-align: right; }
    .picker-selected { color: #000; transform: translate3d(0, 0, 0) rotateX(0); position: relative;}
    .picker-selected-suffix{ font-size: 12px; position: absolute;}
</style>
