<template>
  <div class="des">
    <div class="des">default </div>
    <ul>
      <li><m-button text="default font-size=17" type="default"></m-button></li>
      <li><m-button text="botton-blue font-size=17" type="blue"></m-button></li>
      <li><m-button text="botton-red font-size=17" type="red"></m-button></li>
      <li><m-button text="botton-blue small font-size=16.5" type="blue" :small="true"></m-button></li>
      <li><m-button text="botton-red small font-size=16.5" type="red" :small="true"></m-button></li>      
    </ul>
    
    
    
    
    <div class="des">disable</div>
    <ul>
      <li><m-button text="default disable font-size=17" type="default" :disable="true"></m-button></li>
      <li><m-button text="botton-blue disable blue font-size=17" type="blue" :disable="true"></m-button></li>
      <li><m-button text="botton-red disable red font-size=17" type="red" :disable="true"></m-button></li>
      <li><m-button text="botton-blue disable small font-size=16.5" type="blue" :disable="true" :small="true"></m-button></li>
      <li><m-button text="botton-red disable small font-size=16.5" type="red" :disable="true" :small="true"></m-button></li>
    </ul>
    
    <div class="des">plain</div>
    <ul>
      <li><m-button text="botton--plain--default plain font-size=17" type="default" :plain="true"></m-button></li>
      <li><m-button text="botton--plain--default plain disable font-size=17" type="default" :plain="true" :disable="true"></m-button></li>
    </ul>
  </div>
  <div class="toonui-about">
    <div class="code-view">
      <code>
        <em>// 引入组件</em>
        <span>import MButton from 'toon-ui/lib/components/button'</span>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 注册组件</em>
        <span>Vue.component(Button.name, MButton);</span>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 改变颜色</em>
        <xmp><m-button text="button" type="default"></m-button> height:44px  默认按钮</xmp>
        <m-button text="button" type="default"></m-button>        
        <div style="height: 20px;"></div>
        <xmp><m-button text="button" type="blue"></m-button> height:39px  蓝色按钮</xmp>
        <m-button text="button" type="blue"></m-button>        
        <div style="height: 20px;"></div>
        <xmp><m-button text="button" type="red"></m-button> height:39px  红色按钮</xmp>
        <m-button text="button" type="red"></m-button>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 大小  type="default"  type="blue"</em>
        <xmp><m-button text="button" type="default"></m-button> height:44px  默认按钮</xmp>
        <m-button text="button" type="default"></m-button>        
        <div style="height: 20px;"></div>
        <xmp><m-button text="button" type="blue"></m-button> height:39px</xmp>
        <m-button text="button" type="blue"></m-button>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 字体大小 :small="true"</em> 
        <xmp><m-button text="button" type="blue"></m-button> font-size:17px</xmp>
        <m-button text="button" type="blue"></m-button>        
        <div style="height: 20px;"></div>
        <xmp><m-button text="button" :small="true" type="blue"></m-button> font-size:16.5px</xmp>
        <m-button text="button" type="red"></m-button>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 禁用button :disable="true"</em>
        <xmp><m-button text="button" type="default" :disable="true"></m-button> :disable="true"</xmp>
        <m-button text="button" type="default" :disable="true"></m-button>        
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 幽灵按钮button  :plain="true"</em>
        <xmp><m-button text="button" type="default" :plain="true"></m-button> :plain="true"</xmp>
        <m-button text="button" type="default" :plain="true"></m-button>        
      </code>
    </div>
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
  .des {
    padding:10px;
    li{margin:10px 0;}
  }
  .toonui-about{
    padding:20px 0;
    h3{
      font-size:20px;
      font-weight:700;
      margin-bottom: 10px;
    }
    p{
      line-height:24px;
      font-size:16px;
    }
    a{
      color:#3395ff;
      text-decoration: underline;
    }
  }
</style>
