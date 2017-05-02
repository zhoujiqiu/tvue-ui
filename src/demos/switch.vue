<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch__padding">
      <t-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </t-switch>
    </div>

    <div class="page-part page-switch__padding">
      <t-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </t-switch>
    </div>

  </div>
</template>

<script>
import tSwitch from '../components/Switch/index.vue'
export default {
  components : {
    tSwitch
  },

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component title {
      text-align: center;
      font-size:16px;
      padding:20px;
    }
    @component part {
      margin-bottom: 15px;
    }
    @component switch {
      @descendent padding {
        padding: 0 10px;
      }
    }
  }
</style>
