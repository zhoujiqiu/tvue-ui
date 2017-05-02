<template>
  <div>
    <p class="example-list-item" v-for="item in list" v-text="item"></p>
    <infinite-loading :on-infinite="onInfinite" :distance="distance" ref="infiniteLoading">
      <span slot="no-more">没有更多数据 :)</span>
    </infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from '../components/InfiniteLoading/index.vue'
  export default {
    components: {
      InfiniteLoading
    },
    data () {
      return {
        distance: 100,
        list: []
      }
    },
    methods: {
      onInfinite: function () {
        if (this.list.length > 200) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        } else {
          setTimeout(function () {
            var temp = [];
            for (var i = this.list.length; i <= this.list.length + 10; i++) {
              temp.push(i);
            }
            this.list = this.list.concat(temp);
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          }.bind(this), 1000);
        }
      }
    }
  }
</script>
<style>
.example-list-item{
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 40px;
  color: #666;
  background-color: #fafafa;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e3e3e3;
}
.example-list-item::before{
  content: 'Line: ';
}
</style>