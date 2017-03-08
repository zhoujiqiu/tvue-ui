<template>
  <div class="myRadio">
    <div class="page-title">单选组件</div>
    <m-radio
    align="right" 
    title="radio list"
    v-model="value"
    :options="options"></m-radio>
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
          label: 'Disabled option',
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
