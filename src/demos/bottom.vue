<template>
  <div>
    <div class="m-footer">
      <a v-link="{path:'/'}">首页</a>
      <a v-link="{path:'/demolist'}" >演示</a>
      <a href="https://github.com/zhoujiqiu/toon-ui" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.m-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #59B6EF;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  text-align: center;
  a {
    width: 30%;
    display: inline-block;
    height: 52px;
    line-height: 52px;
    font-size:20px;
    color: #fff;
    text-decoration: none;
  }
}
</style>
