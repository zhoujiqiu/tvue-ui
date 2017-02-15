<template>
  <div>
    <div class="des">Toast</div>
    <m-button text="点击弹出 Toast" type="primary" @click="showToast"></m-button>
    <toast v-if="isShowToast" content="操作成功"></toast>
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import Toast from '../components/Toast/index.vue'

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
      this.isShowToast = true
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
