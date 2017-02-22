<template>
  <div class="des">
    <div>单选 </div>
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
<style>
.des {
  padding:10px;
}
</style>
