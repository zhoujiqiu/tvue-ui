<template>
  <div class="dialog-demo">
    <div class="des">Dialog</div>
    <m-button text="点击弹出 alert提示框" type="primary" @click="showAlert"></m-button>
    <m-button text="点击弹出 confirm提示框" type="primary" @click="showConfirm"></m-button>
    <m-button text="点击弹出 prompt提示框" type="primary" @click="showPrompt"></m-button>
    
    <c-dialog v-if="isShowDialog" v-bind:msg="dialogDatas"></c-dialog> 
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import cDialog from '../components/Dialog/index.vue'

export default {
  data () {
    return {
      isShowDialog: false,
      dialogDatas: {
        title: '提示信息',
        des: '这里是描述信息',
        type: 'alert'
      }
    }
  },
  components: {
    MButton,
    cDialog
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
