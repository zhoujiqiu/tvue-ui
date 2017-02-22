<template>
<c-search v-bind:datas="searchDates"></c-search> 
</template>
<script>
import cSearch from '../components/Search/index.vue'
export default {
  ready: function () {},
  data () {
    return {
      searchDates: {
        placeholder: '请输入要搜索店铺'
      }
    }
  },
  components: {
    cSearch
  },
  methods: {},
  events: {
    searchName: function (param) {
      if (param) {
        console.log('hhhhhhhhhh', param)
      }
    }
  }
}
</script>
<style></style>
