<template>
  <div class="mint-checklist" :class="{ 'is-limit': max <= value.length }">
    <label class="mint-checklist-title" v-text="title"></label>
    <x-cell v-for="option in options">
      <label class="mint-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-checkbox">
          <input
            class="mint-checkbox-input"
            type="checkbox"
            v-model="value"
            :disabled="option.disabled"
            :value="option.value || option">
            <span class="mint-checkbox-core"></span>
        </span>
        <span class="mint-checkbox-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
// import XCell from 'mint-ui/packages/cell/index.js';
// if (process.env.NODE_ENV === 'component') {
//   require('mint-ui/packages/cell/style.css');
// }

/**
 * mt-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :value.sync="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
export default {
  // name: 'tn-checklist',
  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: {
    // XCell
  },

  computed: {
    limit() {
      return this.max < this.value.length;
    }
  },

  watch: {
    value() {
      if (this.limit) {
        this.value.pop();
      }
    }
  }
};
</script>

<style lang="css">
  .mint-cell-wrapper {
      
      background:#fff;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 16px;
      line-height: 1;
      min-height: inherit;
      overflow: hidden;
      padding: 10px 0 10px 10px;
      width: 100%;
      .mint-checkbox-input:checked+.mint-checkbox-core {
      background-color: #26a2ff;
      border-color: #26a2ff;
    }
    .mint-checkbox-core {
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .mint-checkbox-input:checked+.mint-checkbox-core:after {
        border-color: #fff;
        -webkit-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    .mint-checkbox-core:after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 3px;
        left: 6px;
        position: absolute;
        width: 5px;
        height: 9px;
        -webkit-transform: rotate(45deg) scale(0);
        transform: rotate(45deg) scale(0);
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s;
    }
    .mint-cell-title {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .mint-checklist-label {
        display: block;
        padding: 0 10px;
          .mint-checkbox-input {
          display: none;
          }
    }
    .mint-cell-value {
        color: #888;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
}
</style>
