<template>
  <div class="myButton">
    <div class="des">default </div>
    <ul>
      <li><m-button text="default" type="default"></m-button></li>
      <li><m-button text="refuse" type="refuse"></m-button></li>
      <li><m-button text="default small" type="blue" :small="true"></m-button></li>
      <li><m-button text="refuse small" type="refuse" :small="true"></m-button></li>      
    </ul>
    <div class="des">disable</div>
    <ul>
      <li><m-button text="disable" type="default" :disable="true"></m-button></li>
      <li><m-button text="disable small" type="default" :disable="true" :small="true"></m-button></li>
    </ul>
    
    <div class="des">plain</div>
    <ul>
      <li><m-button text="plain" type="default" :plain="true"></m-button></li>
      <li><m-button text="disable plain" type="default" :plain="true" :disable="true"></m-button></li>
    </ul>
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
<style lang="less">
  .myButton {
    padding:10px;
    li{margin:10px 0;}
  }
</style>
