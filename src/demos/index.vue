<template>
  <div>
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
