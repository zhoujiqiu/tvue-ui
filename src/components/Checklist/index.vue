<template>
  <div class="tn-cell-wrapper tn-checklist" :class="{ 'is-limit': max <= value.length }">
    <div>
      <label class="tn-checklist__title" v-text="title" ></label>
    </div>
      <label  v-for="option in options" class="tn-checklist__label">
        <span v-if="option.value=='选中禁用的值'" :class="{'is-right': align === 'right'}" class="tn-checkbox">
          <input type="checkbox" class="tn-checkbox__input" 
          v-model="checkedNames"
          checked="checked"
          :disabled="option.disabled" 
          :value="option.value || option" >
          <span class='tn-checkbox__core' :class="{'tn-checkbox__checked':ischeck}"></span>
        </span>
        <!---->
        <span v-else :class="{'is-right': align === 'right'}" class="tn-checkbox">
          <input type="checkbox" class="tn-checkbox__input"
          v-model="checkedNames"
          :disabled="option.disabled" 
          :value="option.value || option">
          <span class='tn-checkbox__core' :class="{'tn-checkbox__checked':ischeck}"></span>
        </span>
        <!---->
        <span class="tn-checkbox__label" v-text="option.label || option"></span>
      </label>
      <!-- <div v-text="title">ffff</div> -->
        <div v-ref="one">已选中：{{checkedNames}}</div>
  </div>   
</template>

<script>
/**
 * mt-checklist
 * @module components/checklist
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
  ready() {
    console.log('eee', this.checkedValue)
  },
  props: {
    checkedValue: Array,
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },
  data() {
    return {
      checkedNames: [],
      ischeck: false
    };
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
  },
  methods: {
    checkedFn() {
      this.ischeck = true
    }
  }
};
</script>

<style lang="css">
  @component-namespace tn {
    @component checklist {
      background:#fff;
      padding:10px;
      .tn-cell {
        padding: 0;
      }

      @descendent label {
        display: block;
        padding: 0 10px;
        height:34px;
      }

      @descendent title {
        color: #999;
        display: block;
        font-size: 12px;
        margin: 8px;
      }

      @when limit {
        .tn-checkbox-core:not(:checked) {
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
        display: nonde;
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
      /*@descendent checked{
            background-color: #26a2ff;
            border-color: #26a2ff;

            &::after {
              background:#fff;
              border-color: #fff;
              transform: rotate(45deg) scale(1);
            }
          }*/
    }
  }
</style>
