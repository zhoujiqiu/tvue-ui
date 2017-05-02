<template>
  <label class="toon-switch">
    <input class="toon-switch-input" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="toon-switch-core"></span>
    <div class="toon-switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'mt-switch',

  props: {
    value: Boolean
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style>
  .toon-switch {

      display: -webkit-box;

      display: -ms-flexbox;

      display: flex;

      -webkit-box-align: center;

          -ms-flex-align: center;

              align-items: center;

      position: relative
  }

  .toon-switch-label {

      margin-left: 10px;

      display: inline-block
  }

  .toon-switch-label:empty {

      margin-left: 0
  }

  .toon-switch-core {

      display: inline-block;

      position: relative;

      width: 52px;

      height: 32px;

      border: 1px solid #d9d9d9;

      border-radius: 16px;

      box-sizing: border-box;

      background: #d9d9d9
  }

  .toon-switch-core::after, .toon-switch-core::before {

      content: " ";

      top: 0;

      left: 0;

      position: absolute;

      -webkit-transition: -webkit-transform .3s;

      transition: -webkit-transform .3s;

      transition: transform .3s;

      transition: transform .3s, -webkit-transform .3s;

      border-radius: 15px
  }

  .toon-switch-core::after {

      width: 30px;

      height: 30px;

      background-color: #fff;

      box-shadow: 0 1px 3px rgba(0, 0, 0, .4)
  }

  .toon-switch-core::before {

      width: 50px;

      height: 30px;

      background-color: #fdfdfd
  }

  .toon-switch-input {

      display: none
  }

  .toon-switch-input:checked + .toon-switch-core {

      border-color: #26a2ff;

      background-color: #26a2ff
  }

  .toon-switch-input:checked + .toon-switch-core::before {

      -webkit-transform: scale(0);

              transform: scale(0)
  }

  .toon-switch-input:checked + .toon-switch-core::after {

      -webkit-transform: translateX(20px);

              transform: translateX(20px)
  }
</style>