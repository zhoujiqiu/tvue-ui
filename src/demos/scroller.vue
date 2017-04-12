<template>
  <div>
    <scroller style="top: 180px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">

      <div v-for="(item, index) in items" @click="onItemClick(index, item)"
          class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
  import Scroller from '../components/Scroller/index.vue'
  export default {
    components: {
      Scroller
    },
    data () {
      return {
        items: []
      }
    },
    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
      setTimeout(() => {
        this.$refs.my_scroller.resize()
      })
    },
    methods: {
      refresh() {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          if (this.$refs.my_scroller)
            this.$refs.my_scroller.finishPullToRefresh()
        }, 1500)
      },
      infinite() {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;
          setTimeout(() => {
            if (this.$refs.my_scroller)
              this.$refs.my_scroller.finishInfinite()
          })
        }, 1500)
      },
      onItemClick(index, item) {
        console.log(index)
      }
    }
  }
</script>
<style>
.row {
  display: block;
  width: 100%;
  height: 50px;
  padding: 10px 0 10px 15px;
  font-size: 16px;
  line-height: 30px;
  color: #444;
  background-color: #fff;
}
.grey-bg {
  background-color: #eee;
}
</style>