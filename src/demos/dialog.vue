<template>
  <div class="dialog-demo">
    <div class="des">Dialog</div>
    <m-button text="点击弹出 alert提示框" type="primary" @click.native="showAlert"></m-button>
    <m-button text="点击弹出 confirm提示框" type="primary" @click.native="showConfirm"></m-button>
    <m-button text="点击弹出 prompt提示框" type="primary" @click.native="showPrompt"></m-button>
    
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import MessageBox from '../components/Msgbox/index.js'

export default {
  components: {
    MButton
  },
  methods: {
    showAlert: function() {
      MessageBox.alert('提示信息的内容','消息')
    },
    showConfirm: function() {
      MessageBox.confirm('提示信息的内容','消息')
    },
    showPrompt: function() {
      MessageBox.prompt('请输入姓名').then(({value, action}) => {
        MessageBox.alert(value)
      })
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
