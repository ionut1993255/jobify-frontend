<template>
  <div class="form-main-layout">
    <div :class="['form-container', customFormClass]">
      <slot v-if="!isLoading"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormLayout',
  props: {
    customFormClass: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.form-main-layout {
  display: flex;
  background-color: #9be3e2;
}

.form-container {
  width: 700px;
  background-color: #f4f4f4;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow:
    0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);

  &.contact-form {
    width: auto;
    flex: 1;
    margin: 0;
  }
}
</style>
