<template>
  <div class="dialog-demo">
    <div class="des">loading</div>
    <m-button text="点击弹出 Loading" type="primary" @click.native="loading"></m-button>
    <m-button text="点击弹出带文字的 Loading" type="primary" @click.native="textLoading"></m-button>
    
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
    loading: function() {
      Loading.open()
      setTimeout(() => {
        Loading.close()
      },3000)
    },
    textLoading: function() {
      Loading.open('加载中...')
      setTimeout(() => {
        Loading.close()
      },3000)
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
