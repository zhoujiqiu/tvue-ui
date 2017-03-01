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
      list: ['第一项','第二项']
    };
  },
  components: {
    TPulldown
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
