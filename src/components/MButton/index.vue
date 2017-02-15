<template>
    <button :class="classes">{{text}}</button>
</template>
<script>
export default {
  props: {
    text: String,
    type: String,
    plain: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    fn: Function
  },
  computed: {
    classes () {
      return [
        'm-button',
        this.disable ? 'disable' : '',
        this.plain ? this.type ? `m-button--plain--${this.type}` : 'm-button--plain--default' : this.type ? `m-button--${this.type}` : ''
      ]
    }
  },
  methods: {
  }
}
</script>
