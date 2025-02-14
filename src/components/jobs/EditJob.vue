<template>
  <Navbar />

  <Loader v-if="isLoading" />

  <FormLayout v-else>
    <Heading tag="h5" customHeadingClass="heading-form">Edit Job</Heading>

    <Form @submit.prevent="updateJob" submitButtonLabel="Update">
      <FormGroup forId="job-title" labelText="Job Title">
        <Input v-model="job.title" id="job-title" />
      </FormGroup>

      <FormGroup labelText="Job Type">
        <Select v-model="job.type" :options="jobTypes" />
      </FormGroup>

      <FormGroup forId="job-description" labelText="Job Description">
        <Textarea v-model="job.description" id="job-description" />
      </FormGroup>

      <FormGroup forId="job-location" labelText="Job Location">
        <Input v-model="job.location" id="job-location" />
      </FormGroup>

      <FormGroup labelText="Job Posted Date">
        <DatePicker v-model="job.postedDate" />
      </FormGroup>

      <FormGroup labelText="Job Status">
        <Toggler v-model="job.active" active-label="Active" inactive-label="Inactive" />
      </FormGroup>

      <FormGroup labelText="Job Experience Level">
        <Select v-model="job.experienceLevel" :options="jobExperienceLevels" />
      </FormGroup>

      <FormGroup labelText="Job Salary">
        <Select v-model="job.salary" :options="jobSalaries" />
      </FormGroup>

      <FormGroup forId="job-company-name" labelText="Job Company Name">
        <Input v-model="job.company.name" id="job-company-name" />
      </FormGroup>

      <FormGroup forId="job-company-description" labelText="Job Company Description">
        <Textarea v-model="job.company.description" id="job-company-description" />
      </FormGroup>

      <FormGroup forId="job-company-email" labelText="Job Company Email">
        <Input type="email" v-model="job.company.contactEmail" id="job-company-email" />
      </FormGroup>

      <FormGroup forId="job-company-phone" labelText="Job Company Phone">
        <Input v-model="job.company.contactPhone" id="job-company-phone" />
      </FormGroup>
    </Form>
  </FormLayout>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from 'boot/axios'
import type { Job } from 'components/types/interfaces.ts'
import { validateDate } from 'src/utils/validate-date'
import { showNotification } from 'src/utils/show-notification'
import { jobTypes, jobExperienceLevels, jobSalaries } from 'components/jobs/job-dropdown-options'
import Navbar from 'components/ui/Navbar.vue'
import Loader from 'components/ui/Loader.vue'
import FormLayout from 'components/ui/FormLayout.vue'
import Heading from 'components/ui/Heading.vue'
import Form from 'components/ui/Form.vue'
import FormGroup from 'components/ui/FormGroup.vue'
import Input from 'components/ui/Input.vue'
import Select from 'components/ui/Select.vue'
import Textarea from 'components/ui/Textarea.vue'
import DatePicker from 'components/ui/DatePicker.vue'
import Toggler from 'components/ui/Toggler.vue'
import Footer from 'components/ui/Footer.vue'

export default defineComponent({
  name: 'EditJob',
  components: {
    Navbar,
    Loader,
    FormLayout,
    Heading,
    Form,
    FormGroup,
    Input,
    Select,
    Textarea,
    DatePicker,
    Toggler,
    Footer,
  },
  data() {
    return {
      job: {
        postedDate: '',
        company: {},
      } as Job,
      jobId: this.$route.params.id ? String(this.$route.params.id) : '',
      isLoading: true as boolean,
      jobTypes,
      jobExperienceLevels,
      jobSalaries,
    }
  },
  mounted() {
    void this.getJob()
  },
  methods: {
    async getJob() {
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

    async updateJob() {
      try {
        if (!validateDate(this.job.postedDate)) {
          return
        }

        const {
          title,
          type,
          description,
          location,
          postedDate,
          active,
          experienceLevel,
          salary,
          company,
        } = this.job

        const updatedJob: Job = {
          id: this.jobId,
          title,
          type,
          description,
          location,
          postedDate,
          active,
          experienceLevel,
          salary,
          company: { ...company },
        }

        await api.patch(`/jobs/${this.jobId}`, updatedJob, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        showNotification('The job was updated successfully!', 'positive', 'custom-notify')

        await this.$router.push(`/jobs/${this.jobId}`)
      } catch (error) {
        console.error(error)

        showNotification(
          'There was an error while updating the job. Please try again later!',
          'negative',
          'custom-notify',
        )
      }
    },
  },
})
</script>
