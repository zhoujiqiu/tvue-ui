<template>
  <div>
    <group title="JS Components">
      <div class="demolist">
        <cell url="/demos/toast" title="Toast">
          <span slot="center">简短的消息提示框</span>
          <i class="iconfont" slot="left-icon">&#xe659;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/dialog" title="Dialog">
          <span slot="center">弹出式提示框</span>
          <i class="iconfont" slot="left-icon">&#xe62b;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/loading" title="Loading">
          <span slot="center">加载提示框</span>
          <i class="iconfont" slot="left-icon">&#xe640;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/tab" title="Tab">
          <span slot="center">选项卡</span>
          <i class="iconfont" slot="left-icon">&#xe62b;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/infiniteLoading" title="InfiniteLoading">
          <span slot="center">底部无限加载</span>
          <i class="iconfont" slot="left-icon">&#xe603;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/lazyload" title="Lazyload">
          <span slot="center">图片懒加载</span>
          <i class="iconfont" slot="left-icon">&#xe64a;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
      </div>
    </group>
    <group title="FORM Components">
      <div class="demolist">
        <cell url="/demos/field" title="Field">
          <span slot="center">表单编辑器</span>
          <i class="iconfont" slot="left-icon">&#xe62b;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/radio" title="radio">
          <span slot="center">单选框</span>
          <i class="iconfont" slot="left-icon">&#xe6c9;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/checkbox" title="checkbox">
          <span slot="center">复选框</span>
          <i class="iconfont" slot="left-icon">&#xe62b;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/switch" title="Switch">
          <span slot="center">开关组件</span>
          <i class="iconfont" slot="left-icon">&#xe674;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
      </div>
    </group>
    <group title="CSS Components">
      <div class="demolist">
        <cell url="/demos/button" title="Button">
          <span slot="center">按钮组件</span>
          <i class="iconfont" slot="left-icon">&#xe62b;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
        </cell>
        <cell url="/demos/tcell" title="Cell">
          <span slot="center">列表展示组件</span>
          <i class="iconfont" slot="left-icon">&#xe673;</i>
          <i class="iconfont" slot="right-icon">&#xe619;</i>
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
.m-cell__left .iconfont{
    color:#59B6EF;
}
</style>

