<template>
  <div class="form-group">
    <Label :forId="forId" :labelText="labelText" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Label from 'components/ui/Label.vue'

export default defineComponent({
  name: 'FormGroup',
  components: { Label },
  props: {
    forId: {
      type: String,
      required: false,
      default: '',
    },
    labelText: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 25px;
}
</style>
