<template>
  <div>
    <div class="toonui-about">
      <h3>说明</h3>
      <p>前端开发中，随着业务的增多，出于效率的考虑，我们对于组件化开发的需求也越来越迫切。最近公司也在推行组件化，参考了element等其他的一些组件库的思路，开发了一套基于vue的UI基础组件库。</p>
    </div>
    <div class="toonui-about">
      <h3>快速开始</h3>
      <div class="code-view">
        <code>
          <em>// npm安装</em>
          <span>$ npm install toon-ui</span>
        </code>
      </div>
      <div class="code-view">
        <code>
          <em>// 引入toast组件（按需引入）</em>
          <span>import Toast from 'toon-ui/lib/components/toast'</span>
        </code>
      </div>
    </div>
    <div class="toonui-about">
      <h3>实例</h3>
      <p><router-link :to="{name:'demolist'}">点击查看DEMO实例</router-link></p>
    </div>
  </div>
</template>
<style lang="less">
  .toonui-about{
    padding:20px;
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
