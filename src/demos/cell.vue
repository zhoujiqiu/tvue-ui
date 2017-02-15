<template>
  <group title="Cell">
    <cell title="Cell 1">
      <i class="iconfont" slot="left-icon">&#xe665;</i>
      <i class="iconfont" slot="right-icon">&#xe93d;</i>
    </cell>
    <cell title="Cell 2">
      <i class="iconfont" slot="left-icon">&#xe665;</i>
      <i class="iconfont" slot="right-icon">&#xe93d;</i>
    </cell>
    <cell title="Cell 3">
      <i class="iconfont" slot="left-icon">&#xe665;</i>
      <i class="iconfont" slot="right-icon">&#xe93d;</i>
    </cell>
  </group>
</template>
<script>
import Cell from '../components/Cell/index.vue'
import Group from '../components/Group/index.vue'

export default {
  components: {
    Cell,
    Group
  }
}
</script>
