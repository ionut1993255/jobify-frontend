<template>
  <q-toggle
    v-model="internalValue"
    checked-icon="check"
    color="teal"
    unchecked-icon="clear"
    :label="internalValue ? activeLabel : inactiveLabel"
    class="toggler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Toggler',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    activeLabel: {
      type: String,
      default: 'Active',
    },
    inactiveLabel: {
      type: String,
      default: 'Inactive',
    },
  },
  data() {
    return {
      internalValue: this.modelValue,
    }
  },
  watch: {
    modelValue(newValue: boolean) {
      this.internalValue = newValue
    },

    internalValue(newValue: boolean) {
      this.$emit('update:modelValue', newValue)
    },
  },
})
</script>

<style lang="scss" scoped>
.toggler {
  height: 25px;
  font-size: 15px;
  font-weight: 500;
  color: #777;
  letter-spacing: 0.4px;
}
</style>
