<template>
  <div class="toonui-about">
    <h3>说明</h3>
    <p>前端开发中，随着业务的增多，出于效率的考虑，我们对于组件化开发的需求也越来越迫切。最近公司也在推行组件化，参考了其他的一些组件库的思路，开发了一套基于vue1.X的UI基础组件库。</p>
  </div>
  <div class="toonui-about">
    <h3>快速开始</h3>
    <div class="code-view">
      <code>
        <em>// npm安装</em>
        $ npm install toon-ui
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 引入组件</em>
        <span>import Dialog from 'toon-ui/lib/components/dialog'</span>
      </code>
    </div>
  </div>
  <div class="toonui-about">
    <h3>实例</h3>
    <p><a v-link="{path:'/demolist'}">点击查看</a> 具体实例和使用方法</p>
  </div>
  <!-- <div>
    <group title="index">
      <cell url="/demolist" title="demo">
        <i class="iconfont" slot="left-icon">&#xe62d;</i>
        <i class="iconfont" slot="right-icon">&#xe93d;</i>
      </cell>
      <cell url="/about" title="about">
        <i class="iconfont" slot="left-icon">&#xe6d9;</i>
        <i class="iconfont" slot="right-icon">&#xe93d;</i>
      </cell>
    </group>
  </div> -->
</template>
<script>
import Group from '../components/Group/index.vue'
import Cell from '../components/Cell/index.vue'
import MButton from '../components/MButton/index.vue'

export default {
  components: {
    Group,
    Cell,
    MButton
  }
}
</script>
<style lang="less">
  .toonui-about{
    padding:20px;
    h3{
      font-size:20px;
      font-weight:700;
      margin-bottom: 10px;
    }
    p{
      line-height:24px;
      font-size:16px;
    }
    a{
      color:#3395ff;
      text-decoration: underline;
    }
  }
</style>
