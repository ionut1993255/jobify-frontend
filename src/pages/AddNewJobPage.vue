<template>
  <AddNewJob />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddNewJob from 'components/jobs/AddNewJob.vue'

export default defineComponent({
  name: 'AddNewJobPage',
  components: { AddNewJob },
})
</script>
