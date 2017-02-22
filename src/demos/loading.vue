<template>
  <div class="dialog-demo">
    <div class="des">loading</div>
    <m-button text="点击弹出 Loading" type="primary" @click="loading"></m-button>
    <m-button text="点击弹出带文字的 Loading" type="primary" @click="textLoading"></m-button>
    
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
    Loading: function() {
      Loading.open();
    },
    textLoading: function() {
      Loading.open('加载中...');
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
