<template>
  <div class="m-group">
    <div class="m-group__title">{{title}}</div>
    <div class="m-group__slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
