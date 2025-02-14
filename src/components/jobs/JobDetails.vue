<template>
  <Navbar />

  <div v-if="!isLoading">
    <div class="job-btns-container">
      <CustomButton to="/jobs" label="&#8592; Back to Job List" btnClass="back-btn" />

      <div class="job-actions">
        <CustomButton :to="`/jobs/edit/${jobId}`" label="Edit Job" btnClass="edit-job-btn" />

        <CustomButton @click="openConfirmationModal" label="Delete Job" btnClass="delete-job-btn" />

        <ConfirmDeleteModal
          ref="deleteJob"
          :isVisible="showModal"
          message="Are you sure you want to delete this job?"
          @confirm="handleDeleteConfirmation"
          @cancel="closeConfirmationModal"
          @close="closeConfirmationModal"
        />
      </div>
    </div>

    <div class="job-main-layout">
      <div class="job-wrapper">
        <div class="job-grid">
          <q-card class="job-card">
            <q-card-section class="job-summary">
              <div class="job-title">{{ job.title }}</div>

              <q-separator />

              <div class="job-location-type-and-date-container">
                <div class="job-location-and-type-container">
                  <div class="job-location">
                    <q-icon name="location_on" class="job-location-icon" />
                    <span>{{ job.location }}</span>
                  </div>

                  <span>&minus;</span>

                  <div class="job-type">
                    <q-icon name="work" class="job-type-icon" />
                    <span>{{ job.type }}</span>
                  </div>
                </div>

                <div class="job-posted-date">
                  <q-icon name="event" class="job-posted-date-icon" />
                  <span>{{ job.postedDate }}</span>
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="job-info-wrapper">
              <Heading tag="h3" customHeadingClass="heading-job-info">
                <q-icon name="description" class="job-description-icon" />
                <span>Job Description</span>
              </Heading>
              <p>{{ job.description }}</p>

              <Heading tag="h3" customHeadingClass="heading-job-info">
                <q-icon name="military_tech" class="job-experience-level-icon" />
                <span>Experience Level</span>
              </Heading>
              <p>{{ job.experienceLevel }}</p>

              <Heading tag="h3" customHeadingClass="heading-job-info">
                <q-icon name="attach_money" class="job-salary-icon" />
                <span>Salary</span>
              </Heading>
              <p>{{ job.salary }} / Year</p>

              <Heading tag="h3" customHeadingClass="heading-job-info">
                <q-icon name="assignment_turned_in" class="job-status-icon" />
                <span>Job Status</span>
              </Heading>
              <p>
                <q-icon
                  name="fiber_manual_record"
                  :class="job.active ? 'text-green' : 'text-red'"
                />
                <span>{{ job.active ? ' Active' : ' Inactive' }}</span>
              </p>
            </q-card-section>
          </q-card>

          <q-card class="job-card">
            <q-card-section class="job-company-info">
              <Heading tag="h3" customHeadingClass="heading-job-info">
                <q-icon name="info" class="about-company-icon" />
                <span>About Company</span>
              </Heading>

              <q-separator />

              <Heading tag="h4" customHeadingClass="heading-job-company-name">
                {{ job.company?.name }}
              </Heading>

              <q-separator />

              <Heading tag="h4" customHeadingClass="heading-job-company description">
                <q-icon name="corporate_fare" class="job-company-description-icon" />
                <span>Company Description</span>
              </Heading>
              <p>{{ job.company?.description }}</p>
            </q-card-section>

            <q-card-section class="job-company-contact-wrapper">
              <Heading tag="h4" customHeadingClass="heading-job-company contact">
                <q-icon name="email" class="job-company-email-icon" />
                <span>Email</span>
              </Heading>
              <p>{{ job.company?.contactEmail }}</p>

              <Heading tag="h4" customHeadingClass="heading-job-company contact">
                <q-icon name="phone" class="job-company-phone-icon" />
                <span>Phone</span>
              </Heading>
              <p>{{ job.company?.contactPhone }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>

  <Loader v-else />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from 'boot/axios'
import type { Job } from 'components/types/interfaces.ts'
import { showNotification } from 'src/utils/show-notification'
import Navbar from 'components/ui/Navbar.vue'
import CustomButton from 'components/ui/CustomButton.vue'
import ConfirmDeleteModal from 'components/ui/ConfirmDeleteModal.vue'
import Heading from 'components/ui/Heading.vue'
import Loader from 'components/ui/Loader.vue'
import Footer from 'components/ui/Footer.vue'

export default defineComponent({
  name: 'JobDetails',
  components: { Navbar, CustomButton, ConfirmDeleteModal, Heading, Loader, Footer },
  data() {
    return {
      job: {} as Job,
      jobId: this.$route.params.id ? String(this.$route.params.id) : '',
      isLoading: true as boolean,
      showModal: false as boolean,
    }
  },
  mounted() {
    if (this.jobId) {
      void this.getJobDetails()
    }
  },
  methods: {
    openConfirmationModal() {
      this.showModal = true
      window.addEventListener('keydown', this.closeModalOnEsc.bind(this))
    },

    closeConfirmationModal() {
      this.showModal = false
      window.removeEventListener('keydown', this.closeModalOnEsc.bind(this))
    },

    closeModalOnEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.showModal = false
      }
    },

    handleDeleteConfirmation() {
      void this.deleteJob()
    },

    async getJobDetails() {
      this.isLoading = true

      try {
        const response = await api.get(`/jobs/${this.jobId}`)
        this.job = response.data
      } catch (error) {
        console.error(error)
        await this.$router.push({ name: 'NotFoundPage' })
      } finally {
        if (this.$route.name !== 'NotFoundPage') {
          this.isLoading = false
        }
      }
    },

    async deleteJob() {
      try {
        await api.delete(`/jobs/${this.jobId}`)

        showNotification('The job was deleted successfully!', 'positive', 'custom-notify')

        await this.$router.push('/jobs')
      } catch (error) {
        console.error(error)

        showNotification(
          'There was an error while deleting the job. Please try again later!',
          'negative',
          'custom-notify',
        )
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.job-btns-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 103px;
  padding: 30px 0;
}

.job-actions {
  margin-right: 120px;
}

.job-main-layout {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 253px);
  background-color: #9be3e2;
  padding: 10px 0 30px 0;
}

.job-wrapper {
  width: 100%;
  margin: 20px 120px 0;
}

.job-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.job-card {
  padding: 10px 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.job-summary {
  padding: 0;
}

.job-info-wrapper {
  padding-top: 0;
  padding-left: 0;

  span {
    color: #26a69a;
  }

  p span {
    color: #777;
  }
}

.job-title {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

p {
  font-size: 15px;
  margin-bottom: 10px;
  letter-spacing: 0.4px;
}

.job-location-type-and-date-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.job-location-and-type-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
}

.job-location {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.job-location span,
.job-company-info span,
.job-company-contact-wrapper span {
  color: #26a69a;
}

.job-type {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

.job-posted-date {
  letter-spacing: 0.3px;
}

span,
.job-type,
.job-posted-date,
p {
  color: #777;
}

.job-title,
.job-location-icon,
.job-type-icon,
.job-posted-date-icon,
.job-description-icon,
.job-experience-level-icon,
.job-salary-icon,
.job-status-icon,
.about-company-icon,
.job-company-description-icon,
.job-company-email-icon,
.job-company-phone-icon {
  color: orange;
}

.job-location-icon,
.job-type-icon,
.job-posted-date-icon,
.job-company-description-icon,
.job-company-email-icon,
.job-company-phone-icon {
  margin-right: 3px;
}

.job-description-icon,
.job-experience-level-icon,
.job-salary-icon,
.job-status-icon,
.about-company-icon {
  margin-right: 5px;
}

.job-company-info {
  padding-right: 0;
  padding-left: 0;

  p {
    margin-bottom: 0;
  }
}

.job-company-contact-wrapper {
  padding: 0;
}
</style>
