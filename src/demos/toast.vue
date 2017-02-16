<template>
  <div>
    <toast></toast>
    <div class="des">Toast</div>
    <m-button text="点击弹出 Toast" type="primary" @click="showToast"></m-button>
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
    showToast: function() {
      Toast({
        message: '提示消息',
        duration: 5000,
        iconClass: 'icon icon-success'
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
</style>
