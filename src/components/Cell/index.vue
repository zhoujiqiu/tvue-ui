<template>
  <div class="m-cell" @click="goUrl">
    <div class="m-cell__left">
      <slot name="left-icon"></slot>
    </div>
    <div class="m-cell__center">
      <div>
        {{title}}
        <slot name="center"></slot>
      </div>
      <div>{{des}}</div>
    </div>
    <div class="m-cell__right">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    des: String,
    url: {
      type: [String, Object]
    }
  },
  methods: {
    goUrl () {
      if (this.url) {
        window.location.href = '/#' + this.url
      }
    }
  }
}
</script>
