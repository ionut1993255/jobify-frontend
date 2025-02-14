<template>
  <JobDetails />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobDetails from 'components/jobs/JobDetails.vue'

export default defineComponent({
  name: 'JobDetailsPage',
  components: { JobDetails },
})
</script>
