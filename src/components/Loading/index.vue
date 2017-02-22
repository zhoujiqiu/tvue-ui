<template>
  <div class="toonui-indicator" v-show="visible" transition="toonui-indicator" >
    <div class="toonui-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
      <span class="toonui-indicator-spin">
        <div class="toonui-spinner-snake"></div>
      </span>
      <span class="toonui-indicator-text" v-show="text">{{ text }}</span>
    </div>
    <div class="toonui-indicator-mask" @touchmove.stop.prevent></div>
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
  .toonui {
    &-indicator {
      &-wrapper {
        position: fixed 50% * * 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
      }

      &-text {
        display: block;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
        font-weight:400;
      }

      &-spin {
        display: inline-block;
        text-align: center;
      }

      &-mask {
        position: fixed 0 * * 0;
        size: 100%;
        opacity: 0;
        background: transparent;
      }
    }
  }

  .toonui-indicator-transition {
    transition: opacity .2s linear;
  }

  .toonui-indicator-enter,
  .toonui-indicator-leave {
    opacity: 0;
  }
  .toonui-spinner-snake {
    animation: toonui-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top-color: #ccc;
    border-left-color: #ccc;
    border-bottom-color: #ccc;
    width:32px;
    height:32px;
  }

  @keyframes toonui-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>