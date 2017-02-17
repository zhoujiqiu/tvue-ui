<template>
<div v-if="isShow">
  <div class="mark_bg"></div>
  <div class="dialogBox">
    <div class="dialog-title" v-if="msg.title!=='' && msg.type=='alert' || msg.type=='confirm' || msg.type=='prompt'">{{msg.title}}</div>
    <div class="dialog-content" v-if="msg.des!='' && msg.type=='alert' || msg.type=='confirm'">{{msg.des}}</div>
    <div class="dialog-content" v-if="msg.type=='prompt'">
      <div class="tag_content">
        <div class="input">
          <input type='text' v-model="mycontent">
        </div>
      </div>
    </div>
    <div class="btn_box btn_box1" v-if="msg.type=='alert'">
      <ul class="btn1">
        <li>
          <button @click="closeDialog()">确定</button>
        </li>
    </div>
    <div class="btn_box" v-if="msg.type=='confirm' || msg.type=='prompt'">
      <ul class="btn2">
        <li class="btn_red">
          <button @click="closeDialog">取消</button>
        </li>
        <li class="btn_grey">
          <button @click="okDialog" v-if="msg.type=='confirm'">确定</button>
          <button @click="confirmDialog" v-if="msg.type=='prompt'">确定</button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
module.exports = {
  ready: function () {
    if (this.msg.type === 'prompt') {
      setTimeout(function () {
        document.querySelector('.tag_content input').focus()
      }, 100)
    }
  },
  props: ['msg'],
  data () {
    return {
      mycontent: '',
      isShow: true
    }
  },
  methods: {
    closeDialog () {
      this.isShow = false
      this.$dispatch('dialogClose')
    },
    okDialog () {
      this.isShow = false
      this.$dispatch('dialogSure')
    },
    confirmDialog () {
      let temp = this.mycontent || ''
      temp = temp.replace(/\s/g, '')
      this.isShow = false
      this.$dispatch('dialogSure', {content: this.mycontent})
    }
  }
}
</script>
<style lang="less">
  .mark_bg{
    width:100%;
    height:100%;
    position:fixed;
    top:0;left:0;
    z-index:2000;
    background-color:#000;
    opacity:0.5;
  }
  .dialogBox{
    width:85%;
    background:#fff;
    position:fixed;
    left:50%;
    top:50%;
    z-index:2100;
    text-align:center;
    border-radius:6px;
    transform: translate(-50%,-50%);
    overflow:hidden;
    .dialog-title{
      padding-top:1em;
      font-size:16px;
      color:#333;
    }
    .dialog-content{
      color:#999;
      font-size:14px;
      padding:10px 20px 15px;
      line-height:30px;
    }
    .btn_box{
      position: relative;
      &:before{
          content: '';
          position:absolute;
          z-index:2;
          left:0;
          top:0;
          width:100%;
          height:1px;
          background-image: linear-gradient(0deg, #dddee3 50%, transparent 50%);
      }
      ul.btn1{
        overflow:hidden;
        button{height:44px; line-height:44px; text-align: center;font-size:16px;border:none; display: block;width:100%;color:#59B6EF;background: #fff;}
      }
      ul.btn2{
        overflow:hidden;
        li{
          float:left;width:50%;
          &:first-child{
            position:relative;
            &:before{
                content: '';
                position:absolute;
                z-index:1;
                right:0;
                top:0;
                width:1px;
                height:100%;
                background-image: linear-gradient(90deg, #dddee3 50%, transparent 50%);
            }
          }
        }
        button{height:44px; line-height: 44px; text-align: center;font-size:16px;border:none; display: block;width:100%;background: #fff;}
        .btn_red button{color:#333}
        .btn_grey button{color: #59B6EF}
      }
    }
    .tag_content .input{ 
      height: 30px;position: relative;margin:0 auto;width:100%;
      input{  position: absolute;top:1px;left:1px;z-index:200;width:95%; height: 28px; font-size:14px; border: none; display: block; line-height: 28px;-webkit-appearance: none; background: #fff;padding:0px 5px; margin:0px;}
    }
    .tag_content .input:after {
      content: " ";width: 200%;height: 200%; position: absolute;top: 0;left: 0;z-index:100;border: 1px solid #ACB3BF;transform: scale(.5);transform-origin: 0 0;box-sizing: border-box;border-radius:4px;
    }
  }
</style>
