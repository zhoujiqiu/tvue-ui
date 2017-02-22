<template>
  <div class="des">
    <div class="des">default </div>
    <m-button text="default font-size=17" type="default"></m-button>
    <m-button text="botton-blue font-size=17" type="blue"></m-button>
    <m-button text="botton-red font-size=17" type="red"></m-button>
    <m-button text="botton-blue small font-size=16.5" type="blue" :small="true"></m-button>
    <m-button text="botton-red small font-size=16.5" type="red" :small="true"></m-button>
    <div class="des">disable</div>
    <m-button text="default disable font-size=17" type="default" :disable="true"></m-button>
    <m-button text="botton-blue disable blue font-size=17" type="blue" :disable="true"></m-button>
    <m-button text="botton-red disable red font-size=17" type="red" :disable="true"></m-button>
    <m-button text="botton-blue disable small font-size=16.5" type="blue" :disable="true" :small="true"></m-button>
    <m-button text="botton-red disable small font-size=16.5" type="red" :disable="true" :small="true"></m-button>
    <div class="des">plain</div>
    <m-button text="botton--plain--default plain font-size=17" type="default" :plain="true"></m-button>
    <m-button text="botton--plain--default plain disable font-size=17" type="default" :plain="true" :disable="true"></m-button>
  </div>
</template>
<script>
import MButton from '../components/Button/index.vue'

export default {
  components: {
    MButton
  }
}
</script>
<style>
.des {
  padding:10px;
}
</style>
