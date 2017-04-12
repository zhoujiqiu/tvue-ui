<template>
  <div>
    <h1>
        ToonUi
        <span>基于vue的移动端组件库</span>
    </h1>
    
    <m-bottom></m-bottom>
    
    <div class="container">
      <div  id="app">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MBottom from './demos/bottom.vue'

export default {
  name: 'app',
  components: {
    MBottom
  }
}
</script>
<style lang="less">
@import "styles/main.css";
h1{
  text-align: center;
  padding:50px 0;
  margin-bottom:10px;
  background: #fff;
  font-size:40px;
  color:#fff;
  background: #59B6EF;
  border-bottom:1px solid #dddee3;
  text-shadow:0 1px 3px rgba(0,0,0,0.3);
  span{
    display:block;
    font-size:18px;
  }
}
#app {
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  padding-bottom: 120px;
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
