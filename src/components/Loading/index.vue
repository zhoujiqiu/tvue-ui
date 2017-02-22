<template>
  <div class="mint-indicator" v-show="visible" transition="mint-indicator" >
    <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
      <span class="mint-indicator-spin"></span>
      <span class="mint-indicator-text" v-show="text">{{ text }}</span>
    </div>
    <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: false
      };
    },
    props: {
      text: String
    }
  };
</script>
<style>
  @component-namespace mint {
    @component indicator {
      @descendent wrapper {
        position: fixed 50% * * 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
      }

      @descendent text {
        display: block;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
      }

      @descendent spin {
        display: inline-block;
        text-align: center;
      }

      @descendent mask {
        position: fixed 0 * * 0;
        size: 100%;
        opacity: 0;
        background: transparent;
      }
    }
  }

  .mint-indicator-transition {
    transition: opacity .2s linear;
  }

  .mint-indicator-enter,
  .mint-indicator-leave {
    opacity: 0;
  }
  .mint-spinner-snake {
    animation: mint-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top-color: #ccc;
    border-left-color: #ccc;
    border-bottom-color: #ccc;
    width:32px;
    height:32px;
  }

  @keyframes mint-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>