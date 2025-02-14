<template>
  <div class="q-pa-md q-gutter-xs">
    <div class="row justify-center" style="font-size: 4em">
      <q-spinner-dots color="secondary" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loader',
})
</script>
