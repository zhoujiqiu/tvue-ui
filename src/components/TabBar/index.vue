<template>
<div class="tab-container">
  <div class="tn-tabbar">
  <a class="tn-tab-item" v-for="(item,index) in tabs.tabList"  v-on:click="tabChange(index)">
    <span class="tn-tab-item-tit" :class="{selected:tabs.isSelect==index}">{{item}}</span>
  </a> 
  </div>
  <div class="tn-tab-container-item">
    <div class="tn-cell" v-for="(item,index) in tabs.isSelectCon">
     <div v-if='tabs.isSelect==index' v-html="item"></div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    tabs: {
      isSelect: '',
      tabList: Array,
      isSelectCon: Array
    }
  },
  computed: {
    customClass() {
      let classes = [];
      switch (this.tabs.fixed) {
        case false:
          classes = [];
          break;
        default:
          classes.push('is-fixed');
      }
      classes.push(this.className);
      return classes.join(' ');
    }
  },
  methods: {
    tabChange: function (index) {
      this.$emit('tabchange', index)
      this.tabs.isSelect = index
    }
  }
}
</script>
<style>
.tab-container{
  position: relative;
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
    .tn-tabbar{
        .is-fixed {
          right: 0;
          bottom: 0;
          position: fixed;
          z-index: 1;
        }
    }
    .tn-tab-item {
        color:#777E8C;
        display: block;
        font-size:16px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-decoration: none;
        height:44px; line-height:44px;
        .selected{
          padding:0px 10px;
          border-bottom:2px solid #007AFF;
          color:#000;
          display:inline-block;
          height:44px;
      }
    }
    .tn-tab-item-label {
        color: inherit;
        font-size: 12px;
        line-height: 1;
    }
    .tn-tabbar>.tn-tab-item.is-selected>.tn-tab-item-tit {
        border-bottom:2px solid #007AFF;
        color: #000;
        padding:0px 10px;
        display:inline-block;
        height:44px;
    }
    .tn-tab-container-item {
        padding: 10px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 100%;
        /*position: absolute;*/
        top: 75px;
        /*z-index:99;*/

    }
}
</style>
