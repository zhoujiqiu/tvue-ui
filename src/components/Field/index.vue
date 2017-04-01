<template>
  <x-cell
    class="toon-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="toon-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="toon-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="toon-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="mintui mintui-field-error"></i>
    </div>
    <span class="toon-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
    <div class="toon-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
import XCell from '../Tcell/index.vue';
/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-field v-model="value" label="用户名"></mt-field>
 * <mt-field v-model="value" label="密码" placeholder="请输入密码"></mt-field>
 * <mt-field v-model="value" label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
 * <mt-field v-model="value" label="邮箱" placeholder="成功状态" state="success"></mt-field>
 */
export default {
  name: 'mt-field',
  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },
  components: { XCell },
  methods: {
    doCloseActive() {
      this.active = false;
    },
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    },
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>

<style lang="css">
  .toon-field {

      display: -webkit-box;

      display: -ms-flexbox;

      display: flex;
  }

  .toon-field .toon-cell-title {

      width: 105px;

      -webkit-box-flex: 0;

          -ms-flex: none;

              flex: none;
  }

  .toon-field .toon-cell-value {

      -webkit-box-flex: 1;

          -ms-flex: 1;

              flex: 1;

      color: inherit;

      display: -webkit-box;

      display: -ms-flexbox;

      display: flex;
  }

  .toon-field.is-nolabel .toon-cell-title {

      display: none;
  }

  .toon-field.is-textarea {

      -webkit-box-align: inherit;

          -ms-flex-align: inherit;

              align-items: inherit;
  }

  .toon-field.is-textarea .toon-cell-title {

      padding: 10px 0;
  }

  .toon-field.is-textarea .toon-cell-value {

      padding: 5px 0;
  }

  .toon-field-core {

      -webkit-appearance: none;

         -moz-appearance: none;

              appearance: none;

      border-radius: 0;

      border: 0;

      -webkit-box-flex: 1;

          -ms-flex: 1;

              flex: 1;

      outline: 0;

      line-height: 1.6;

      font-size: inherit;

      width: 100%;
  }

  .toon-field-clear {
      opacity: .4;
      .iconfont{
        width:20px;
        height:20px;
        display:inline-block;
      }
      .iconfont-field-error{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhAhwQNAI4wehrAAABoklEQVRIx8WVvS8EQRiHH7saX3Gu3EpBQgTFVhqcxCE0olAgEiFxiVyi9gdc66K4hE6joVL4jEM/CTpBpbhKrkEUOMXdsLM3s7tXeaudffd58puZ7Az8d9WZGm4nSRL0E6PILReciqeIAtcmxZbWmmJbfIcI3CkOAzNPiGPv0FZgy9kkGzLpeafZOS/oErgW+0xHWrk95kSpKoGTZTESDr00Fs58CULn7q8xceoRuE281oQDNIgPsCqDJaW1YUBmldHCbwLX5tP3aYK8Bs8RV97Y4rucoKvq4zyJUBw65BRGNHFVhQ6HQSlIQKBCj8OQFPQbFq2sMOHQB/UAtGGqvKhzXww4xGSColEw674wY+wWpeDGhJMjrtkRWXdSkA/A1eVU60oKLgJxs+JaCu5DcJPisSIQX6wpjXXtxvkVy6L09zc28kat5f0bxTuTNeKj4gM8J1LhwWllIDKeETvlB++RdkY3PZHwXdLyWPUICiXngJYIKTKk5ZGquxfGOQqZ+7l3aPn74hibVQO8gqXiQXdjO0mG6avcjZeciOfIS1xL/QDsXWpCftAtyQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0yOFQxNjo1MjowMiswODowMNZYE+QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMjhUMTY6NTI6MDIrMDg6MDCnBatYAAAAAElFTkSuQmCC);
        background-position: no-repeat;
        background-size: 20px;
      }
  }

  .toon-field-state {
      color: inherit;
      margin-left: 20px;
  }

  .toon-field-state.is-default {

      margin-left: 0;
  }

  .toon-field-state.is-success {

      color: #4caf50;
  }

  .toon-field-state.is-warning {

      color: #ffc107;
  }

  .toon-field-state.is-error {

      color: #f44336;
  }

  .toon-field-other {

      top: 0;

      right: 0;

      position: absolute;
  }
  .toon-field-state{
    .iconfont-field-success{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABR1BMVEUAAABMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1BMr1AAAAAGIvIdAAAAa3RSTlMALXGx3uvXpmQaCHheAFk8BaZ4B8ePAACrc2A1FPcDh08IY9biAD1dGIldTNJdhF2tT3Rdu1VjXazRZFRdg4d0Rl1LPIY6XRcImGDfhEwS8wNdMwCmbwbBigSgc1U5BXL3WSVrqtXjz59eEd/UkzkAAAABYktHRACIBR1IAAAAB3RJTUUH4QIcESoJepBkCwAAAQxJREFUOMtjYKAqYGRiZmFlY+fgxCrLxZ2NADy8GPJ82aiAH1VaQDAbHQghywuLZGMCUTG4vLhENjYgCVcglY0dSEPlZXDIZ8vKQRTI41KQrQCWV8QmpaQMIlVUQQrUsMmrQ2gNkAJNLPJaUIY2SIEOprwujKUHUoAprw9nGiAUGBrB5Y0Rak2QTDA1g8qbIxlmAVJgCeVYWYPlbZBtswUpsIPx7B2A8o4oznECKXCGc11cldxQ3esOUuCB4Ht6ocp7Q+LCB2dc+EIU+OGS9w+AxncgDgVBsAQTHIJVPhSRJsPCschHIKfayCgM+Wi0fBGDJh+LkXPi4hGyCYnY82ZSckpqWnpGZhYpGRoAp5EHvnMYG/IAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDItMjhUMTc6NDI6MDkrMDg6MDDIR0FbAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTAyLTI4VDE3OjQyOjA5KzA4OjAwuRr55wAAAABJRU5ErkJggg==);
      background-position: no-repeat;
      background-size: 20px;
      width:20px;
      height:20px;
      display:inline-block;
    }
    .iconfont-field-error{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABVlBMVEUAAADYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgbYHgYAAADoRgkIAAAAcHRSTlMAJWus2+vaq2kjA2xoAkxIApGLAQKupgGSikxGCwhtelZlA0BW7QIrQCZtQGSuQKPdQNHu4d1W7UDQrVbtQKJsVu1AYypW7UAlA1btQAFrcO1AYwoISkSOhgKpoQEBjYYBSEQCZ2QBIGam1OTTpGQdYiX4ZgAAAAFiS0dEAIgFHUgAAAAHdElNRQfhAhwRGBNqgskAAAABIUlEQVQ4y2NgoCpgZGJmYWVj5+DEKsvFXYAAPLwY8nwFqIAfVVpAsAAdCAkjyYuIFmACMXGEAokCbEASLi9VgB1IQ+VlCnABWYgCOQhPHklGAUIpguWVYKLKcHkVVShDDaRAHS6ugS5foAlSoIUwWRtNvkAHpEAXyW49VPkCfZACA2R3G6LIFxiBFBij+IwBWb7ABKTAFFnEzNwCmWsJUmCFJGBtU1Bgi8S3AymwR/AdHEGkE0LAGaTABc51dYPQ7nARD5ACTxjPyxvG8oExfMFh7Qfh+AcgjA6EUEGQyAouwAVCoPEdikM+DJ5iwrHKRyCSXGQUFvnoGKRUGxuHIR+fgJrwE9HkkzByTnIKknRqGtbcl56RmZWdk5uXT0qGBgDCfRPhGvMVSgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0yOFQxNzoyNDoxOSswODowMOFG+8EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMjhUMTc6MjQ6MTkrMDg6MDCQG0N9AAAAAElFTkSuQmCC);
      background-position: no-repeat;
      background-size: 20px;
      width:20px;
      height:20px;
      display:inline-block;
    }
    .iconfont-field-warning{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABHVBMVEUAAAD/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQcAAAAnE8K6AAAAXXRSTlMAOIDH+vrHgDgLf4AMW1sFpKUFBcHCBQCiowBXWA+urQ94+TD4eQUFMZUxdRd1t7jm6Pb35OWzs29wLCwDA2xtCgtKS42OAqipAgGLjAFHSAJmZgIbZaTS49KkZRxfX0suAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+ECHBErDBPhocUAAADvSURBVDjLY2CgKmBkYmaJZWVj58Aqy8kViwDcPBjyvLGogA9Vml8gFh0ICiHJC4vEYgJRMbi8uEQsNiApBVMgHYsdyEDlZZHE5BjkkXgKEAWKSEJKyipIPFWwvFosbqAOUqCBIqSJwtMCKdBGEdJB4emCFOjhUaAPUmCAR4EhSIERHgXGIAUmeBSYghSY4VFgDlJggUeBJUiBFR4F1iAFNngU2ILD2g6nAntIZDngVOAIjW+nWOzAGZ6kXLDKuyLSpJs7FnkPT6RU6+WNIe/ji5rw/dDk/TFyTkAgknRQMNbcFxIaFh4RGRUdQ0qGBgCJTul/CBdoqAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0yOFQxNzo0MzoxMiswODowMOkofgEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMjhUMTc6NDM6MTIrMDg6MDCYdca9AAAAAElFTkSuQmCC);
      background-position: no-repeat;
      background-size: 20px;
      width:20px;
      height:20px;
      display:inline-block;
    }
  }
</style>
