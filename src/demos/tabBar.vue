<template>
  <div class="tabBar-demo">
    <div class="des">tabbar</div>
    <t-tabbar v-bind:tabs='tabs' v-on:tabchange="tabChange"></t-tabbar> 
  </div>
</template>
<script>
import TTabbar from '../components/Tabbar/index.vue'
export default {
  data () {
    return {
      tabs:{
        // fixed: false, // 默认不传是false,true是固底
        isSelect: 0, // 第几个选中，默认不传0开始计
        isSelectCon: ['我初始化的年度内容', '我初始化的月度内容', '我初始化的季度内容'], // 选中的内容数组，无内容为空
        tabList: ['年度', '月度', '季度'] // tab的title值数组，默认无值
      }
    }
  },
  components: {
    TTabbar
  },
  methods: {
    tabChange: function (index) {
      let j = parseInt(index) // 注意，需转化为整数
      this.tabs.isSelectCon.splice(j, 1, '我可以是post请求回来的数据哟'+j) // 只是其中的一个方法
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
</style>
