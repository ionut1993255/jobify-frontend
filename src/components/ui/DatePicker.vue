<template>
  <div class="q-pa-md date-picker-wrapper">
    <div class="q-gutter-md row items-start">
      <q-date v-model="internalDate" minimal mask="YYYY-MM-DD" color="teal" class="date-picker" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatePicker',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      internalDate: this.modelValue,
    }
  },
  watch: {
    modelValue(newValue: string) {
      this.internalDate = newValue
    },

    internalDate(newValue: string) {
      this.$emit('update:modelValue', newValue)
    },
  },
})
</script>

<style lang="scss" scoped>
.date-picker-wrapper {
  padding-right: 0;
  padding-bottom: 0;
}

.date-picker {
  width: 100%;
  color: #777;
  margin: 0;
  border-radius: 6px;
}
</style>
