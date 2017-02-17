<template>
  <div class="toast-demo">
    <div class="des">Toast Demo</div>
    <m-button text="点击弹出 Toast" type="primary" @click="showToast1"></m-button>
    <m-button text="点击弹出带有icon的 Toast" type="primary" @click="showToast2"></m-button>
    <m-button text="自定义 Toast位置" type="primary" @click="showToast3"></m-button>
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import Toast from '../components/Toast/index.js'

export default {
  data () {
    return {
      isShowToast: false
    }
  },
  components: {
    MButton,
    Toast
  },
  methods: {
    showToast1: function() {
      Toast('提示消息')
    },
    showToast2: function() {
      Toast({
        message: '提示消息',
        duration: 3000,
        iconClass: 'iconfont icon-cell'
      })
    },
    showToast3: function() {
      Toast({
        message: '提示消息',
        position: 'bottom'
      })
    }
  }
}
</script>
<style>
.toast-demo{
  padding:0 30px;
}
.des {
  text-align: center;
  font-size: 18px;
}
.icon-cell{
  display: block;
  font-size:30px;
  &:before{
    content: '\e665'
  }
}
</style>
