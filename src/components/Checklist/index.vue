<template>
  <div class="tn-cell-wrapper tn-checklist" :class="{ 'is-limit': max <= options.hasChecked.length }">
    <div>
      <!-- <label class="tn-checklist__title" v-text="title" ></label> -->
    </div>
      <label  v-for="option in options.optionList" class="tn-checklist__label">
        <span v-if="options.hasChecked.includes(option.value)" :class="{'is-right': align === 'right'}" class="tn-checkbox">
          <input type="checkbox" class="tn-checkbox__input" 
          v-model="options.hasChecked"
          checked="checked"
          :disabled="option.disabled" 
          :value="option.value || option" >
          <span class='tn-checkbox__core' :class="{'tn-checkbox__checked':ischeck}"></span>
        </span>
        <!---->
        <span v-else :class="{'is-right': align === 'right'}" class="tn-checkbox">
          <input type="checkbox" class="tn-checkbox__input"
          v-model="options.hasChecked"
          :disabled="option.disabled" 
          :value="option.value || option">
          <span class='tn-checkbox__core' :class="{'tn-checkbox__checked':ischeck}"></span>
        </span>
        <!---->
        <span class="tn-checkbox__label" v-text="option.label || option"></span>
      </label>
  </div>   
</template>

<script>
/**
 * mt-checklist
 * @module components/checklist
 *
 * @param {(string[]|object[])} options.optionList - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} options.hasChecked - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :value.sync="value" :options="options"></mt-checklist>
 options3 = {
    hasChecked: ['选项A2'], // 选中的值，与optionList中的value相同即为选中
    optionList: ['选项A2', '选项B2', '选项C2', '选项D2']
  }
 */
export default {
  // name: 'tn-checklist',
  ready() {
  },
  props: {
    checkedValue: Array,
    max: Number,
    title: String,
    align: String,
    options: {
      type: Object,
      required: true
    }
    // value: Array
  },
  data() {
    return {
      checkedNames: this.options.hasChecked,
      ischeck: false
    };
  },
  components: {
    // XCell
  },

  computed: {
    limit() {
      debugger
      console.log(this.max < this.options.hasChecked.length)
      return this.max < this.value.length
    }
  },

  watch: {
    value() {
      if (this.limit) {
        this.value.pop()
      }
    }
  },
  methods: {
    clickCheck() {
      console.log(this.options.hasChecked.length)
    }
  }
};
</script>

<style lang="css">
  @component-namespace tn {
    @component checklist {
      background:#fff;
      .tn-cell {
        padding: 0;
      }

      @descendent label {
        display: block;
        padding:5px 0 10px 10px;
        height:34px;
        margin-bottom:5px;
        border-bottom:1px solid #EEEDD3;
      }

      @descendent title {
        color: #999;
        display: block;
        font-size: 12px;
        margin: 8px;
      }

      @when limit {
        .tn-checkbox__core:not(:checked) {
          background-color: #ccc;
          border-color: #ccc;
        }
      }
    }

    @component checkbox {
      @when right {
        float: right;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 6px;
      }

      @descendent input {
        display: none;
        &:checked {
          + .tn-checkbox__core {
            background-color: #26a2ff;
            border-color: #26a2ff;

            &::after {
              /*background:#fff;*/
              border-color: #fff;
              transform: rotate(45deg) scale(1);
            }
          }
        }

        &[disabled] + .tn-checkbox__core {
          background-color: #ccc;
          border-color: #ccc;
        }
      }

      @descendent core {
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          border: 2px solid transparent;
          border-left: 0;
          border-top: 0;
          content: " ";
          position: absolute 3px * * 6px;
          size: 4px 8px;
          transform: rotate(45deg);
          transition: transform .2s;
        }
      }
    }
  }
</style>
