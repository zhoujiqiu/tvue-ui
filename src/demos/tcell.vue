<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <t-cell title="标题文字"></t-cell>
    <t-cell title="标题文字" value="说明文字"></t-cell>
    <t-cell title="标题文字" icon="more" value="带 icon"></t-cell>
    <t-cell title="标题文字" is-link value="带链接"></t-cell>
    <t-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </t-cell>
    <t-cell title="标题文字">
      <mt-button size="small" type="primary" icon="back">按钮</mt-button>
    </t-cell>

    <t-cell title="标题" label="描述信息" is-link></t-cell>
  </div>
</template>
<script>
import tCell from '../components/Tcell/index.vue'

export default {
  components: {
    tCell
  }
}
</script>