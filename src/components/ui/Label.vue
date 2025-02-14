<template>
  <label :for="forId">{{ labelText }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Label',
  props: {
    labelText: {
      type: String,
      required: true,
    },
    forId: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
label {
  display: flex;
  font-size: 18px;
  font-weight: 500;
  color: #26a69a;
  margin-bottom: 5px;
  letter-spacing: 0.4px;
}
</style>
