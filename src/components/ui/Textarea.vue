<template>
  <textarea :value="modelValue" :id="id" :required="required" @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Textarea',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLTextAreaElement

      if (target) {
        this.$emit('update:modelValue', target.value)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  min-height: 120px;
  font-size: 15px;
  color: #777;
  margin-bottom: -8px;
  padding: 10px;
  letter-spacing: 0.5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea:focus {
  outline: none;
  border-color: #26a69a;
  box-shadow: 0 0 5px rgba(38, 166, 154, 0.3);
  transition: all 0.3s ease;
}
</style>
