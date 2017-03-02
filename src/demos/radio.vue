<template>
  <div class="myRadio">
    <h3>单选</h3>
    <m-radio
    align="right" 
    title="radio list"
    v-model="value"
    :options="options"></m-radio>
  </div>
  <div class="toonui-about">
    <div class="code-view">
      <code>
        <em>// 引入组件</em>
        <span>import MRadio from 'toon-ui/lib/components/radio'</span>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 注册组件</em>
        <span>Vue.component(Radio.name, MRadio);</span>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 单选按钮位置 align="right"</em>
        <xmp><m-radio align="right" title="radio list" v-model="value" :options="options"></m-radio> 居右</xmp>
        <xmp><m-radio title="radio list" v-model="value" :options="options"></m-radio> 居左</xmp>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 按钮列表名称 title="radio list"</em>
        <xmp><m-radio align="right" title="radio list" v-model="value" :options="options"></m-radio> 名称为radio list</xmp>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 列表数据  :options="options"</em>
        <xmp><m-radio align="right" title="radio list" v-model="value" :options="options"></m-radio>


        data () {
          return {
            options: [              
              {
                label: 'optionA',
                value: 'valueA'
              },
              {
                label: 'optionB',
                value: 'valueB'
              },
              {
                label: 'optionC',
                value: 'valueC'
              }
            ]
          }</xmp>
      </code>
    </div>
    <div class="code-view">
      <code>
        <em>// 是否禁用 options.disabled=true</em>        
        <xmp><m-button text="button" :small="true" type="blue"></m-button>  disabled option的选项禁用

          data () {
          return {
            options: [
              {
                label: 'disabled option',
                value: 'valueF',
                disabled: true
              },
              {
                label: 'optionA',
                value: 'valueA'
              },
              {
                label: 'optionB',
                value: 'valueB'
              }
            ]
          }
        </xmp>
      </code>
    </div>
  </div>
</template>
<script>
import MRadio from '../components/Radio/index.vue'

export default {
  components: {
    MRadio
  },
  data () {
    return {
      options: [
        {
          label: 'disabled option',
          value: 'valueF',
          disabled: true
        },
        {
          label: 'optionA',
          value: 'valueA'
        },
        {
          label: 'optionB',
          value: 'valueB'
        }
      ]
    }
  }
}
</script>
<style lang="less">
  .myRadio {
    padding:10px;
  }
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
