<template>
  <div>
    <div class="des">Dialog</div>
    <m-button text="点击弹出 dialog" type="primary" @click="showDialog"></m-button>
    
    <c-dialog v-if="isShowDialog" v-bind:msg="dialogDatas"></c-dialog> 
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import cDialog from '../components/Dialog/index.vue'

export default {
  data () {
    return {
      isShowDialog: false,
      dialogDatas: {
        title: '提示信息',
        des: '这里是描述信息',
        type: 3
      }
    }
  },
  components: {
    MButton,
    cDialog
  },
  methods: {
    showDialog: function() {
      this.isShowDialog = true
    }
  },
  events: {
    dialogClose: function () {
      this.isShowDialog = false
    }
  }
}
</script>
<style>
.des {
  text-align: center;
  font-size: 18px;
}
</style>
