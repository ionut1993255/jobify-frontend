<template>
  <form>
    <slot></slot>

    <div class="submit-btn-container">
      <CustomButton type="submit" :label="submitButtonLabel" btnClass="submit-btn" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from 'components/ui/CustomButton.vue'

export default defineComponent({
  name: 'Form',
  components: { CustomButton },
  props: {
    submitButtonLabel: {
      type: String,
      default: 'Create',
    },
  },
})
</script>

<style lang="scss" scoped>
.submit-btn-container {
  text-align: center;
}
</style>
