<template>
     <div class="tui-toast" v-if="toastIsHidden">
     <p class="tui-toast__content">{{content}}</p></div>
 </template>
 <script>
  export default {
    props: ['content'],
    data () {
      return {
        toastIsHidden: true,
        content: '提示信息'
      }
    },
    ready: function () {
      this.closeToast()
    },
    methods: {
      closeToast () {
        let self = this
        setTimeout(function () {
          self.toastIsHidden = false
        }, 3000)
      }
    }
  }
</script>
<style  scoped>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
.dialog{  position:absolute; width:100%; left:0px; bottom:3px; height:4.8rem; line-height:4.8rem; color:#fff; font-size:1.25rem;}
.tui-toast {
position: fixed;
z-index: 5000;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: rgba(0, 0, 0, 0.75);
text-align: center;
border-radius: 4px;
color: #FFFFFF;
}
.tui-toast__content {
    padding:0.5em;
    color:#fff;
    font-size: 18px;
}

</style>
