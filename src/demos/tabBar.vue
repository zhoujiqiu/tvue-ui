<template>
  <div class="tabBar-demo">
    <div class="des" @click='test'>tabbar{{testCon}}</div>
    <t-tabbar v-bind:tabs='tabs' v-if='show'></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/Tabbar/index.vue'
export default {
  data () {
    return {
      testCon:'shaolign',
      show: true,
      tabs:{
        fixed: false, // 默认不传是false,true是固底
        isSelect: 1, // 第几个选中，从0开始计 
        isSelectCon: ['我是年度内eee容', '我是月度内容', '我是季度内容'],
        tabList: ['年度', '月度', '季度'] // 默认无值
      }
    }
  },
  components: {
    TTabbar
  },
  events: {
    tabChange: function (index) {
      // this.show = false
      this.testCon = 'sksloeeeoeo'
      this.tabs.isSelectCon = ['dddddd', '我的新的内容，可以是post类的数据返回哟', 'dd0e0e00e']
      // setTimeout(function () {
      //   this.show = true
      // }, 3000)
    }
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
