<template>
  <div>
    <h1 class="web-font">
        <span>ToonUI</span>
        <p>
          <router-link :to="{path: '/'}" replace>组件</router-link>
          <a href="https://zhoujiqiu.github.io/docsify/#/readme">文档</a>
        </p>
    </h1>
    
    <div class="container web-font">
      <div  id="app">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "styles/main.css";
h1{
  text-align: left;
  padding:15px;
  background: #fff;
  font-size:24px;
  color:#fff;
  background: #59B6EF;
  border-bottom:1px solid #dddee3;
  // text-shadow:0 1px 3px rgba(0,0,0,0.3);
  font-weight:400;
  display: flex;
  line-height:30px;
  p{
    display:block;
    width:100%;
    flex:1;
    text-align:right;
    font-size:14px;
    a{
      color:#fff;
      margin-left:15px;
    }
  }
}
#app {
  height: 100%;
  color: #333;
  padding-bottom: 50px;
}
.container{
  margin: 0 auto;
  overflow-x:hidden;
}
.code-view{
  font-size:16px;
  margin-bottom:10px;
  span{
    display:block;
  }
  code{
    border:1px solid #dddee3;
    border-radius:5px;
    background: #fff;
    padding:20px;
    display: block;
  }
  em{
    display:block;
    color:#999;
  }
}
</style>
