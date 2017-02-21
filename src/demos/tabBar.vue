<template>
<div class="tab-container">
  <div class="tn-tabbar is-fixed">
   <a class="tn-tab-item">
    <div class="tn-tab-item-icon">icon
    </div>
    <div class="tn-tab-item-icon">月度</div>
   </a>
   <a class="tn-tab-item is-selected">
    <div class="tn-tab-item-icon">icon
    </div>
    <div class="tn-tab-item-icon">季度</div>
   </a>
   <a class="tn-tab-item">
    <div class="tn-tab-item-icon">icon
    </div>
    <div class="tn-tab-item-icon">年度</div>
   </a>
  </div>
  <div class="tn-tab-container-item">
    <a class="tn-cell">季度</a>
  </div>
</div>
</template>
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
    padding: 10px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
}
.tn-tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
}
.tn-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1;
}
.tn-tabbar>.tn-tab-item.is-selected {
    background-color: #eaeaea;
    color: #26a2ff;
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
<!-- <template>
  <div class="el-tabs__active-bar" :style="barStyle">eeee</div>
</template>
<script>
  export default {
    name: 'TabBar',
    props: {
      tabs: Array
    },
    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$parent.$refs.tabs) return {};
          let style = {};
          let offset = 0;
          let tabWidth = 0;
          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];
            if (!$el) { return false; }
            if (!tab.active) {
              offset += $el.clientWidth;
              return true;
            } else {
              tabWidth = $el.clientWidth;
              return false;
            }
          });
          const transform = `translateX(${offset}px)`;
          style.width = tabWidth + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;
          return style;
        }
      }
    }
  };
</script> -->