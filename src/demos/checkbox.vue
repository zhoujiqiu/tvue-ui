<template>
  <div class="dialog-demo">
    <div class="des" @click="getValue">Checkbox</div>
    <t-checkbox
      class="page-part"
      title="复选框列表"
      :options="options1">
    </t-checkbox>
    <t-checkbox
      class="page-part"
      title="第二个复选框列表"
      :options="options2">
    </t-checkbox>
    <!-- <t-checkbox
      align="right"
      class="page-part"
      title="右对齐"
      :options="options3">
    </t-checkbox> -->
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import TCheckbox from '../components/Checkbox/index.vue'
export default {
  data() {
    return {
    };
  },
  components: {
    TCheckbox
  },
  created() {
    this.options1 = {
      hasChecked: ['选项A1'], // 选中的值，与optionList中的value相同即为选中
      optionList: ['选项A1', '选项B1', '选项C1']
    }
    this.options3 = {
      hasChecked: ['选项A3'], // 选中的值，与optionList中的value相同即为选中
      optionList: ['选项A3', '选项B3', '选项C3', '选项D3']}
    this.options2 = {
      hasChecked: ['选中禁用的值','值B4'], // 选中的值，与optionList中的value相同即为选中
      optionList:
      [{
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: '选项A4',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B4'
      }]
    };
  },
  methods: {
    getValue() {
      console.log('111111111', this.options1.hasChecked) // 获得选中的值
      console.log('222222222', this.options2.hasChecked)
      console.log('333333333', this.options3.hasChecked)
    }
  }
};
</script>
<style>
.des {
  text-align: center;
  font-size: 18px;
}
.dialog-demo{
  padding:0 30px;
}
</style>
