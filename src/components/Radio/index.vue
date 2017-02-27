<template>
  <ul class="m-radio">
    <li v-for="option in options">
      <label>
        <span
          :class="{'is-right': isRight, 'in': option.value === value}"
          class="m-radio-val">
          <input
            type="radio"
            v-model="value"
            :disabled="option.disabled"
            :value="option.value || option">
            <span></span>
        </span>
        <span class="m-radio-label" v-text="option.label || option"></span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  ready: function () {
    console.log(this.value)
  },
  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  computed: {
    isSelected () {
      if (this.options.disabled) {
        return false
      } else {
        return true
      }
    },
    isRight () {
      if (this.align === 'right') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    test (option) {
      // if (!option.disabled) {
      //   console.log(this.value)
      // } else {
      //   alert('已经禁用')
      // }
    }
  }
}
</script>
<style>
.m-radio{
  overflow: hidden;
  background: #fff;
  padding-left:15px;
  li{
    border-bottom: 1px solid #e4e4e4;
    height: 44px;    
    label{
      display: block;
      
      overflow: hidden;
    }
    &:last-child {
      border-bottom: none;
    }
  }

  &-val{
    height: 44px;
    width: 28px;
    float: left;
    display: block;    
    input{
      display: none;
    }
  }
  &-label{
    float: left;
    font-size:17px;
    line-height: 44px;    
  }
}
.is-right{
  float: right;
}
.in{
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAAXNSR0IArs4c6QAAAjBJREFUSA21lU9IlEEYxp9Z0+yPFekl8CQJ3Tx48FhmBhJESFJ6kKAwEIQEs12PHtRN0ENdqkNBIKEX6yAapXiSoIOeOgSdgiiQ0FAxVp+e+dzP/ebbb0XbdWCYef/s85v3ndld4LBGH/thZ3oYf1PQNcEkDHrTmkkMmHjhQQmOCvLAOTgxcsRx5GXQoA9PJdHpyBAU+FuBKmJMkGcC3MuCAPcxaF4UoCIP8lKAdgcCbKuWuxgyr6w/P1ALi3Aer6XTasV2B7GldrULMub7/r91HSxGOcYkeNMXS68p1dImyETQn6moi0e9wBOzGUyI3LewRJAJQa6H4n/VrluCTIb8iHmOOyxFGd560+73GjZejcksCLGphjXr4rMgVs6gg8d1unfaNXj6xEcs66TPzXoWr5vHUKoDGTQ6MWJDldxQJe8df8CIoQLjuxAbsMByTKGTJwN5QA9PCDIVAVmT79peEKsTU7kDWlcdUYOLOI1pdPGU5+9lGYoxI8FLTh7xR3aTfmLmHH+EsfPqEqyTyLTiZ5wc4pNacluxN5p1odiK7CbdyYLjz2FknnectarP9vhsKDclO/M6bZD4rU5cxWPzOZSb08yAbMoj1qAIH7SryPkJ6qmkcAXDZjFnTkRg53n7gaRZ0rZe86fvclbil76M9QeFWA23Il81wQuKzMo857u0/lAlDWrXl4Bv39tokP34Q1brZmYFrNSdfBfksir5um/lAyXGWaW/43nYNc/xD04/kq9klcwMAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 13px;
}
</style>