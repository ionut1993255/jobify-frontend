<template>
  <EditJob />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditJob from 'components/jobs/EditJob.vue'

export default defineComponent({
  name: 'EditJobPage',
  components: { EditJob },
})
</script>
