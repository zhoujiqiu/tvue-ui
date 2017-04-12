<template>
  <div>
    <group title="DEMO实例清单">
      <div class="demolist">
        <cell url="/demos/toast" title="Toast">
          <span slot="center">简短的消息提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/dialog" title="Dialog">
          <span slot="center">弹出式提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/loading" title="Loading">
          <span slot="center">加载提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/tab" title="tabBar">
          <span slot="center">选项卡</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/scroller" title="Scroller">
          <span slot="center">下拉刷新&加载更多</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/lazyload" title="Lazyload">
          <span slot="center">图片懒加载</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/button" title="Button">
          <span slot="center">按钮组件</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/field" title="Field">
          <span slot="center">表单编辑器</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/radio" title="radio">
          <span slot="center">单选框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/checklist" title="checklist">
          <span slot="center">复选框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/switch" title="Switch">
          <span slot="center">开关组件</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demos/tcell" title="Cell">
          <span slot="center">列表展示组件</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <!-- <cell url="/demos/datetimePicker" title="DatetimePicker">
          <span slot="center">日期选择器</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell> -->
        <!-- <cell url="/demos/pullup" title="pullup">
          <span slot="center">上拉加载更多</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell> -->
      </div>
    </group>
  </div>
</template>
<script>
import Group from '../components/Group/index.vue'
import Cell from '../components/Cell/index.vue'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style>
@import '../styles/demo/demo.css'
</style>

