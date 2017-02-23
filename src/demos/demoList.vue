<template>
  <div>
    <group title="demo list">
      <div class="demolist">
        <cell url="/demo/toast" title="Toast">
          <span slot="center">简短的消息提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/dialog" title="Dialog">
          <span slot="center">弹出式提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/button" title="Button">
          <span slot="center">按钮组件</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/tab" title="tabBar">
          <span slot="center">选项卡</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/checklist" title="tabBar">
          <span slot="center">复选框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/loading" title="Loading">
          <span slot="center">加载提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/datetimePicker" title="DatetimePicker">
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
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

