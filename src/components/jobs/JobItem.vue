<template>
  <q-card class="job-card">
    <q-card-section class="job-card-header">
      <div class="job-title">{{ job.title }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="job-card-info">
      <div class="job-location">
        <q-icon name="location_on" class="job-location-icon" />
        <span>{{ job.location }}</span>
      </div>

      <div class="job-posted-date">
        <q-icon name="event" class="job-posted-date-icon" />
        <span>{{ job.postedDate }}</span>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <p class="job-description">{{ truncatedDescription }}</p>

      <CustomButton
        v-if="job.description.length > 90"
        @click="toggleFullDescription"
        :label="showFullDescription ? 'Less' : 'More'"
        btnClass="toggle-description-btn"
      />
    </q-card-section>

    <q-card-section class="job-card-footer">
      <CustomButton :to="`/jobs/${job.id}`" label="Read More" btnClass="read-more-btn" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Job } from 'components/types/interfaces.ts'
import CustomButton from 'components/ui/CustomButton.vue'

export default defineComponent({
  name: 'JobItem',
  components: { CustomButton },
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },
  data() {
    return {
      showFullDescription: false as boolean,
    }
  },
  computed: {
    truncatedDescription(): string {
      let description = this.job.description.trim()

      if (!this.showFullDescription && description.length > 90) {
        const cutIndex = description.lastIndexOf(' ', 90)
        description = description.substring(0, cutIndex) + '...'
      }

      return description
    },
  },
  methods: {
    toggleFullDescription() {
      this.showFullDescription = !this.showFullDescription
    },
  },
})
</script>

<style lang="scss" scoped>
.job-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
}

.job-card-header {
  padding-bottom: 10px;
}

.job-title {
  font-size: 22px;
  font-weight: bold;
  color: orange;
  letter-spacing: 0.7px;
}

.job-card-info,
.job-posted-date,
.job-location {
  display: flex;
  align-items: center;
}

.job-card-info {
  justify-content: space-between;
  letter-spacing: 0.3px;
}

.job-location {
  font-size: 15px;
  font-weight: 500;
  color: #26a69a;
}

.job-posted-date {
  font-size: 14px;
  color: #777;
}

.job-location-icon,
.job-posted-date-icon {
  margin-right: 2px;
  color: orange;
}

.job-description {
  font-size: 15px;
  color: #777;
  letter-spacing: 0.3px;
}

.job-card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}
</style>
