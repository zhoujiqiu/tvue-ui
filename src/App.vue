<template>
  <div id="app">
    <h1>
        ToonUi
        <span>基于vue1.x的移动端组件库</span>
    </h1>
    <m-bottom></m-bottom>
    <router-view></router-view>
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
  padding:20px 0;
  margin-bottom:10px;
  background: #fff;
  font-size:36px;
  color:#59B6EF;
  span{
    display:block;
    font-size:16px;
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

</style>
