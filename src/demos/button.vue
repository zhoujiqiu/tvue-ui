<template>
  <div>
    <div class="des">color</div>
    <m-button text="success" type="success"></m-button>
    <m-button text="primary" type="primary"></m-button>
    <m-button text="cancel" type="cancel"></m-button>
    <div class="des">disable</div>
    <m-button text="success" type="success" :disable="true"></m-button>
    <m-button text="primary" type="primary" :disable="true"></m-button>
    <m-button text="cancel" type="cancel" :disable="true"></m-button>
    <div class="des">plain</div>
    <m-button text="success" type="success" :plain="true"></m-button>
    <m-button text="primary" type="primary" :plain="true"></m-button>
    <m-button text="cancel" type="cancel" :plain="true"></m-button>
    <div class="des left">
      <p>size</p>
      <p class="p-left">button的宽度统一为100%，需要不同宽度的button时，外层加上一个div即可。高度需要自己覆盖。</p>
    </div>
    <div class="button-large">
      <m-button text="large" type="success" :plain="true"></m-button>
    </div>
    <div class="button-middle">
      <m-button text="middle" type="primary" :plain="true"></m-button>
    </div>
    <div class="button-small">
      <m-button text="small" type="cancel" :plain="true"></m-button>
    </div>
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'

export default {
  components: {
    MButton
  }
}
</script>
<style>
.des {
  text-align: center;
  .p-left {
    text-align: left;
    text-indent: 44px;
    line-height: 1.2;
    font-size: 24px;
  }
}
.button-large {
  width: 100%;
  margin: auto;
}
.button-middle {
  width: 50%;
  margin: auto;
}
.button-small {
  width: 33%;
  margin: auto;
}
</style>
