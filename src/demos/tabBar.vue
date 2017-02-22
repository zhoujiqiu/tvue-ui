<template>
  <div class="tabBar-demo">
    <div class="des">tabBar Demo</div>
    <t-tabbar v-bind:tabs='tabs'></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/TabBar/index.vue'
export default {
  data () {
    return {
      tabs:{
        fixed: true, // 默认不传是false,true是固底
        isSelect: 1, // 第几个选中，从0开始计 
        tabList: ['月度', '季度', '年度'],
        isSelectCon: '我是季度内容'
      }
    }
  },
  components: {
    TTabbar
  },
  methods: {
    // showToast1: function() {
    //   Toast('提示消息')
    // },
    // showToast2: function() {
    //   Toast({
    //     message: '提示消息',
    //     duration: 3000,
    //     iconClass: 'iconfont icon-cell'
    //   })
    // },
    // showToast3: function() {
    //   Toast({
    //     message: '提示消息',
    //     position: 'bottom'
    //   })
    // }
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
</style>
