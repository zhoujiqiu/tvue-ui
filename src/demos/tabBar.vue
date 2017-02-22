<template>
  <div class="tabBar-demo">
    <div class="des">tabBar Demo</div>
    <t-tabbar></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/TabBar/index.vue'
export default {
  data () {
    return {
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
.icon-cell{
  display: block;
  font-size:30px;
  &:before{
    content: '\e665'
  }
}
</style>
