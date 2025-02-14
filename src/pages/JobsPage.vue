<template>
  <JobList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobList from 'components/jobs/JobList.vue'

export default defineComponent({
  name: 'JobsPage',
  components: { JobList },
})
</script>
