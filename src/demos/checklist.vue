<template>
  <div class="dialog-demo">
    <div class="des">Checklist</div>
    <t-checklist
      class="page-part"
      title="复选框列表"
      v-model="value1"
      :options="options1">
    </t-checklist>
    <div title="选中的项">选中的项:{{ value1 }}
    </div>
    <t-checklist
      class="page-part"
      title="第二个复选框列表"
      v-model="value2"
      :options="options2">
    </t-checklist>
    <div title="选中的项">选中的项:{{ value2 }}
    </div>
    <t-checklist
      class="page-part"
      title="最多选两个"
      :max="2"
      v-model="value3"
      :options="options3">
    </t-checklist>
    <div title="选中的项">选中的项:{{ value3 }}
    </div>
    <t-checklist
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value4"
      :options="options4">
    </t-checklist>
    <div title="选中的项">选中的项:{{ value4 }}
    </div>
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import TChecklist from '../components/Checklist/index.vue'
export default {
  // name: 'page-checklist',
  data() {
    return {
      value1: [],
      value2: ['选中禁用的值','值F'],
      value3: ['选项A'],
      value4: []
    };
  },
  components: {
    TChecklist
  },
  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options4 = ['选项A', '选项B', '选项C', '选项D'];
    this.options2 = [
      {
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
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ];
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
