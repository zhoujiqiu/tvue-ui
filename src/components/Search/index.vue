<template>
  <div class="search_shop_box" style="z-index:2100;">
    <div class="search_shop_val">
      <div class="search_shop_input"><i></i><input type="text" placeholder="{{datas.placeholder}}" v-model="searchName" class="search" /></div>
      <div class="cancel_shop_btn" @click="clearSearch()">清空</div>
    </div>
  </div>
</template>
<style>
/*搜索*/
input{outline:0;font-family:Arial;}
.search_shop_box {position: relative;padding: 7px 0px  7px 8px;background:#fff;overflow:hidden;}
.search_shop_val{display:flex;}
.search_shop_val .cancel_shop_btn{ color:#ff477c; height:28px; line-height:28px; margin-left:3px;}
.search_shop_val .search_shop_input{ width:90%;display:flex; background:#fff; border:1px solid #eee;}
.search_shop_val .search_shop_input .search{width:99%; border:none; height:28px; line-height:28px; padding:4px 6px 4px 0px; background-size:14px;}
.search_shop_input i{width:14px; height:14px; background:url(../../assets/icon_search.png) no-repeat; background-size:100%; margin:7px 8px}
</style>
<script type="text/babel">
  export default {
    props: ['datas'],
    ready: function () {},
    data() {
      return {
        searchName: ''
      };
    },
    computed: {},
    methods: {
      clearSearch: function () {
        this.searchName = ''
      }
    },
    watch: {
      searchName: function (val) {
        this.$dispatch('searchName', {name: val})
      }
    }
  };
</script>