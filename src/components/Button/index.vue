<template>
    <button :class="classes">{{text}}</button>
</template>
<script>
export default {
  props: {
    text: String,
    type: String,
    plain: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fn: Function
  },
  computed: {
    classes () {
      return [
        'm-button',
        this.disable ? 'disable' : '',
        this.small ? 'small' : '',
        this.plain ? this.type ? `m-button--plain--${this.type}` : 'm-button--plain--default' : this.type ? `m-button--${this.type}` : ''
      ]
    }
  },
  methods: {
  }
}
</script>
<style>
.m-button{
  margin: 10px auto;
  position: relative;
  width: 100%;
  border: none;
  text-align: center;
  border-radius: 4px;
  outline: none;
  &:active:not(.disable) {
    filter:alpha(opacity=60);
    opacity:0.6;
  }
  &--default{
    background-color: #3395ff;
    color: #fff;
    height: 44px;   
    font-size: 17px;    
  }
  &--blue{
    background-color: #3395ff;
    color: #fff;
    height: 39px;   
    font-size: 17px; 
  }
  &--red{
    background-color: #FF5A5F;
    color: #fff;
    height: 39px;   
    font-size: 17px;  
  }
  &--plain--default{
    border-radius: 22px;
    color: #007aff;
    position: relative;
    &:after{
     content: " ";
     width: 200%;height: 200%;
     position: absolute;
     top: 0;
     left: 0;
     border: 1px solid #3395ff;
     transform: scale(.5);
     transform-origin: 0 0;
     border-radius: 44px;
    }  
  }
}
.disable{
  background-color: #dddee3;  
  color: #fff;
  &:after{
   border: none; 
  }
}
.small {
  font-size: 16.5px;
}
</style>