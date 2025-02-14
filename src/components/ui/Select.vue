<template>
  <select :value="modelValue" @change="handleChange">
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { JobDropdownOption } from 'components/types/interfaces.ts'

export default defineComponent({
  name: 'Select',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array as () => JobDropdownOption[],
      required: true,
    },
  },
  methods: {
    handleChange(event: Event) {
      const target = event.target as HTMLSelectElement

      if (target) {
        this.$emit('update:modelValue', target.value)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
select {
  width: 100%;
  font-size: 15px;
  color: #777;
  padding: 10px;
  letter-spacing: 0.5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #26a69a;
  box-shadow: 0 0 5px rgba(38, 166, 154, 0.3);
}

select,
select:focus {
  transition: all 0.3s ease;
}
</style>
