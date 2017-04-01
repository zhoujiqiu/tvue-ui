<template>
  <div class="msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="msgbox" v-show="value">
        <div class="msgbox-header" v-if="title !== ''">
          <div class="msgbox-title">{{ title }}</div>
        </div>
        <div class="msgbox-content" v-if="message !== ''">
          <div class="msgbox-message" v-html="message"></div>
          <div class="msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
  .msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    opacity: 1;
    backface-visibility: hidden;
  }

  .msgbox-header{
    text-align: center;
    padding: 15px 20px 5px 10px;
  }

  .msgbox-content {
    padding: 10px 20px;
    min-height: 36px;
    position: relative;
    &:before{
        content: '';
        position:absolute;
        z-index:2;
        left:0;
        bottom:0;
        width:100%;
        height:1px;
        background-image: linear-gradient(0deg, #dddee3 50%, transparent 50%);
    }
  }

  .msgbox-close {
    display: inline-block;
    position: absolute;
    top: 14px;
    right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
  }

  .msgbox-input > input {
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 4px 5px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  .msgbox-errormsg {
    color: red;
    font-size: 12px;
    min-height: 16px;
  }

  .msgbox-title {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  .msgbox-status {
    float: left;
    width: 36px;
    height: 36px;
    font-size: 36px !important;
  }

  .msgbox-status.icon-success {
    color: #94c852;
  }

  .msgbox-status.icon-warning {
    color: #ff9c00;
  }

  .msgbox-status.icon-error {
    color: #ff4248;
  }

  .msgbox-message {
    color: #999;
    font-size: 16px;
    line-height: 36px;
    margin-left: 36px;
    margin-right: 36px;
    text-align: center;
  }

  .msgbox-btns {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }

  .msgbox-btn {
    display: block;
    background-color: #fff;
    border: 0;
    flex: 1;
    margin: 0;
    border-radius: 0;
    font-size: 14px;
  }

  .msgbox-btn:active {
    opacity: 0.6;
    outline: none;
  }

  .msgbox-btn:focus {
    outline: none;
  }

  .msgbox-confirm {
    width: 50%;
    color: #59B6EF;
  }

  .msgbox-cancel {
    width: 50%;
    position:relative;
    &:before{
        content: '';
        position:absolute;
        z-index:1;
        right:0;
        top:0;
        width:1px;
        height:100%;
        background-image: linear-gradient(90deg, #dddee3 50%, transparent 50%);
    }
  }

  .msgbox-confirm-highlight,
  .msgbox-cancel-highlight {
    font-weight: 800;
  }

  .msgbox-btns-reverse {
    -webkit-box-direction: reverse;
  }

  .msgbox-btns-reverse .msgbox-confirm {
    position:relative;
    &:before{
        content: '';
        position:absolute;
        z-index:1;
        right:0;
        top:0;
        width:1px;
        height:100%;
        background-image: linear-gradient(90deg, #dddee3 50%, transparent 50%);
    }
  }

  .msgbox-btns-reverse .msgbox-cancel {
    border-right: 0;
  }

  .pop-bounce-transition {
    transition: .2s .1s;
  }

  .pop-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }

  .pop-bounce-leave {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
  .v-modal-enter{
    animation:v-modal-in .2s ease
  }
  .v-modal-leave{
    animation:v-modal-out .2s ease forwards
  }
  @keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}
</style>

<script type="text/ecmascript-6" lang="babel">
  var CONFIRM_TEXT = '确定';
  var CANCEL_TEXT = '取消';

  import Popup from './popup.js';
  export default {
    mixins: [ Popup ],

    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'msgbox-btn msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'msgbox-btn msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
