<template>
  <Navbar />

  <FormLayout>
    <Heading tag="h5" customHeadingClass="heading-form">Add Job</Heading>

    <Form @submit.prevent="addNewJob">
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
import { generateNextId } from 'src/utils/generate-next-id'
import { showNotification } from 'src/utils/show-notification'
import { jobTypes, jobExperienceLevels, jobSalaries } from 'components/jobs/job-dropdown-options'
import Navbar from 'components/ui/Navbar.vue'
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
  name: 'AddNewJob',
  components: {
    Navbar,
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
      jobTypes,
      jobExperienceLevels,
      jobSalaries,
    }
  },
  mounted() {
    this.job.type = 'Full-Time'
    this.job.active = true
    this.job.experienceLevel = 'Junior'
    this.job.salary = '$50K - $60K'
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await api.get('/jobs')
        return response.data
      } catch (error) {
        console.error(error)
      }
    },

    async addNewJob() {
      try {
        if (!validateDate(this.job.postedDate)) {
          return
        }

        const jobs = await this.fetchJobs()

        const nextJobId = generateNextId(jobs, (job: Job) => job.id)
        const nextCompanyId = generateNextId(jobs, (job: Job) => job.company.id)

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

        const jobWithGeneratedIds: Job = {
          id: nextJobId,
          title,
          type,
          description,
          location,
          postedDate,
          active,
          experienceLevel,
          salary,
          company: {
            id: nextCompanyId,
            name: company.name,
            description: company.description,
            contactEmail: company.contactEmail,
            contactPhone: company.contactPhone,
          },
        }

        await api.post('/jobs', jobWithGeneratedIds, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        showNotification('The job was created successfully!', 'positive', 'custom-notify')

        await this.$router.push('/jobs')
      } catch (error) {
        console.error(error)

        showNotification(
          'There was an error while creating the job. Please try again later!',
          'negative',
          'custom-notify',
        )
      }
    },
  },
})
</script>
