<template>
  <div class="dialog-demo">
    <div class="des">Checklist</div>
    <t-pulldown :list="list">
    </t-pulldown>
   </div>
  </div>
</template>
<script>
import MButton from '../components/MButton/index.vue'
import TPulldown from '../components/Pulldown/index.vue'
export default {
  // name: 'page-checklist',
  data() {
    return {
      list: ['选中禁用的值','值F']
    };
  },
  components: {
    TPulldown
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
