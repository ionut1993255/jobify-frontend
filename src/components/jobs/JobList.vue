<template>
  <Navbar />

  <div v-if="!isLoading" class="job-list-main-layout">
    <div class="add-new-job-btn-container">
      <CustomButton to="/jobs/add" label="Add Job" btnClass="add-new-job-btn" />
    </div>

    <div v-if="visibleJobs.length === 0" class="no-jobs-message-wrapper">
      <q-card class="no-jobs-message-card">
        <q-card-section>
          <div class="no-jobs-message-content">
            <q-icon name="warning" color="amber" size="1.5em" />
            <span>No jobs available at the moment. Please try again later!</span>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="job-list-container">
      <div class="jobs-grid">
        <JobItem v-for="job in visibleJobs" :key="job.id" :job="job" />
      </div>
    </div>

    <div v-if="visibleJobs.length < jobs.length" class="load-more-jobs-btn-container">
      <CustomButton @click="loadMoreJobs" label="Load More Jobs" btnClass="load-more-jobs-btn" />
    </div>
  </div>

  <Loader v-else />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from 'boot/axios'
import type { Job } from 'components/types/interfaces.ts'
import Navbar from 'components/ui/Navbar.vue'
import CustomButton from 'components/ui/CustomButton.vue'
import JobItem from 'components/jobs/JobItem.vue'
import Loader from 'components/ui/Loader.vue'
import Footer from 'components/ui/Footer.vue'

export default defineComponent({
  name: 'JobList',
  components: { Navbar, CustomButton, JobItem, Loader, Footer },
  data() {
    return {
      jobs: [] as Job[],
      visibleJobs: [] as Job[],
      jobsPerPage: 6 as number,
      isLoading: true as boolean,
    }
  },
  mounted() {
    void this.getJobs()
  },
  methods: {
    loadMoreJobs() {
      const currentLength = this.visibleJobs.length
      const newLength = currentLength + this.jobsPerPage

      this.visibleJobs = this.jobs.slice(0, newLength)
    },

    async getJobs() {
      this.isLoading = true

      try {
        const response = await api.get('/jobs')
        this.jobs = response.data.sort(
          (a: Job, b: Job) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime(),
        )

        this.visibleJobs = this.jobs.slice(0, this.jobsPerPage)
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.job-list-main-layout {
  min-height: calc(100vh - 150px);
  background-color: #9be3e2;
}

.add-new-job-btn-container {
  display: flex;
  justify-content: flex-end;
  padding: 30px 120px 10px 0;
}

.no-jobs-message-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.no-jobs-message-card {
  max-width: 750px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.no-jobs-message-content {
  display: flex;
  gap: 15px;
  font-size: 21px;
  font-weight: bold;
  color: #ff6f00;
  padding: 20px 40px;
  letter-spacing: 0.6px;
}

.job-list-container {
  min-height: auto;
  padding-top: 20px;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 120px 20px 120px;
}

.load-more-jobs-btn-container {
  display: flex;
  padding: 10px 0 30px 0;
}
</style>
