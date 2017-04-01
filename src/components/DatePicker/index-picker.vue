<template>
    <div class="picker">
      <div class="picker-toolbar">
        <slot></slot>
      </div>
      <div class="picker-collection">
        <picker-slot v-for="slot in slots" :values="slot.values || []" :value.sync="values[slot.valueIndex]" :suffix="slot.suffix" :key="slot.id">
        </picker-slot>
      </div>
    </div>
</template>
<script>
  import pickerSlot from './index-picker-slot'
  export default {
    beforeCompile() {
      var slots = this.slots || [];
      this.values = [];
      var values = this.values;
      var valueIndexCount = 0;
      slots.forEach(function(slot) {
        if (!slot.divider) {
          slot.valueIndex = valueIndexCount++;
          /*values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 3];*/
          values[slot.valueIndex] = slot.value;
        }
      });
      // console.log(this.values)
    },    
    components: {
      pickerSlot
    },
    props: {
      slots: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      values() {
        var slots = this.slots || [];
        var values = [];
        slots.forEach(function(slot) {
          if (!slot.divider) values.push(slot.value);
        });

        return values;
      },
      slotCount() {
        var slots = this.slots || [];
        var result = 0;
        slots.forEach(function(slot) {
          if (!slot.divider) result++;
        });
        return result;
      }
    },
    events: {
      slotValueChanged() {
        this.$emit('change', this, this.values);
      }
    },
    methods: {
      getSlot(slotIndex) {
        var slots = this.slots || [];
        var count = 0;
        var target;
        var children = this.$children;

        slots.forEach(function(slot, index) {
          if (!slot.divider) {
            if (slotIndex === count) {
              target = children[index];
            }
            count++;
          }
        });
        return target;
      },
      setSlotValue(index, value) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.value = value;
        }
      }
    }
  }
</script>
<style lang='less' scoped>
    .picker{z-index: 1000;position:absolute;bottom:0;right:0; background-color: #fff; width: 100%;}
    .picker .picker-toolbar{ padding: 0 15px; overflow: hidden;}
    .picker .picker-collection{ display: flex; font-size: 21px; color: #BABABA; height: 216px; overflow: hidden; padding: 3px 0;}
</style>
