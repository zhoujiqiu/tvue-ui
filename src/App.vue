<template>
  <div id="app">
    <h1>
        <img src="./assets/logo.png" class="m-logo">
        ToonUi
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
  },
  data () {
    return {
      haha: 'yaa',
      size: 'large'
    }
  }
}
</script>
<style lang="css">
@import "styles/main.css";
html {
  background-color: #eee;
}
html,body,p,input,ul,li {
  margin: 0px;
  padding: 0px;
}
ul {
  list-style: none;
}
h1{
  text-align: center;
  .m-logo {
    display: block;
    margin: auto;
    width: 3rem;
  }
}
#app {
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  padding-bottom: 120px;
}

</style>
