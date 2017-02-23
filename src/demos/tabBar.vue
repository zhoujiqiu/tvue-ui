<template>
  <div class="tabBar-demo">
    <div class="des">tabbar</div>
    <t-tabbar v-bind:tabs='tabs'></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/Tabbar/index.vue'
export default {
  ready: function () {
  },
  data () {
    return {
      tabs:{
        fixed: false, // 默认不传是false,true是固底
        isSelect: 0, // 第几个选中，默认不传0开始计 
        isSelectCon: ['<div>111</div>', 'ww我是月dddddd度内容', '我是季666度内容'], // 选中的内容数组，无内容为空
        tabList: ['年度', '月度', '季度'] // tab的title值数组，默认无值
      }
    }
  },
  components: {
    TTabbar
  },
  events: {
    tabChange: function (index) {
      let j = parseInt(index) // 注意，需转化为整数
      this.tabs.isSelectCon.splice(j, 1, '00我的新dddd的内容，可以是post类的数据返000回哟'+j) // 只是其中的一个方法
    }
  },
  methods: {
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
