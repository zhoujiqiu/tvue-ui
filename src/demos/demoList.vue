<template>
  <div>
    <group title="demo list">
      <div class="demolist">
        <cell url="/demo/toast" title="toast">
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/dialog" title="dialog">
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/button" title="button">
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

