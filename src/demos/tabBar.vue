<template>
  <div class="tabBar-demo">
    <div class="des" @click='test'>tabbar</div>
    <t-tabbar v-bind:tabs='tabs'></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/Tabbar/index.vue'
export default {
  data () {
    return {
      show: false,
      tabs:{
        fixed: false, // 默认不传是false,true是固底
        isSelect: 1, // 第几个选中，从0开始计 
        tabList: ['deeedddd333e', '353ddd535', '444'],
        isSelectCon: '1111111'
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
