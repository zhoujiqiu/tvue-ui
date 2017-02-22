<template>
<div class="tab-container">
  <div class="tn-tabbar is-fixed">
   <a class="tn-tab-item">
    <span class="tn-tab-item-tit">月度</span>
   </a>
   <a class="tn-tab-item is-selected">
    <span class="tn-tab-item-tit">季度</span>
   </a>
   <a class="tn-tab-item">
    <span class="tn-tab-item-tit">年度</span>
   </a>
  </div>
  <div class="tn-tab-container-item">
    <a class="tn-cell">季度内容</a>
  </div>
</div>
</template>
<script>
module.exports = {
  ready: function () {
  },
  props: ['msg'],
  data () {
    return {
      mycontent: '',
      isShow: true
    }
  },
  methods: {
  }
}
</script>
<style>
.tab-container{
  position: relative;
}
.tn-tabbar {
    background-image: -webkit-l inear-gradient(top,#d9d9d9,#d9d9d9 50%,transparent 0);
    background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: 0 0;
    /*position: relative;*/
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*right: 0;*/
    /*bottom: 0;*/
    left: 0;
    /*position: absolute;*/
    text-align: center;
}
.tn-tabbar.is-fixed {
    right: 0;
    /*bottom: 0;*/
    /*left: 0;*/
    /*position: fixed;*/
    /*z-index: 1;*/
}
.tn-tab-item {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
    height:44px; line-height:44px; 
}
.lab_item.selected span{padding:0px 10px; border-bottom:1px solid #FF4257; color:#FF4257; display:inline-block; height:44px;}
/*.tn-tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
}*/
.tn-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1;
}
.tn-tabbar>.tn-tab-item.is-selected>.tn-tab-item-tit {
    border-bottom:1px solid #007AFF;
    color: #000;
    padding:0px 10px;
    display:inline-block;
    height:44px;
}
.tn-tab-container-item {
    color:#000;
    padding: 10px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    /*position: absolute;*/
    top: 75px;
    /*z-index:99;*/

}
</style>
