<template>
  <div class="dialog-demo">
    <div class="des">loading</div>
    <m-button text="点击弹出 Loading" type="primary" @click="showAlert"></m-button>
    <m-button text="点击弹出带文字的 Loading" type="primary" @click="showConfirm"></m-button>
    
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import Loading from '../components/Loading/index.js'

export default {
  components: {
    MButton
  },
  methods: {
    showAlert: function() {
      this.dialogDatas = {
        title: '提示信息',
        des: '这里是描述信息',
        type: 'alert'
      }
      this.isShowDialog = true
    },
    showConfirm: function() {
      this.dialogDatas = {
        title: '提示信息',
        des: '请确认此操作',
        type: 'confirm'
      }
      this.isShowDialog = true
    },
    showPrompt: function() {
      this.dialogDatas = {
        title: '请输入您的姓名',
        type: 'prompt'
      }
      this.isShowDialog = true
    }
  },
  events: {
    dialogClose: function () {
      this.isShowDialog = false
    },
    dialogSure: function (param) {
      if (param) {
        window.alert(param.content)
      }
      this.isShowDialog = false
    }
  }
}
</script>
<style>
.des {
  text-align: center;
  font-size: 18px;
}
.dialog-demo{
  padding:0 30px;
}
</style>
