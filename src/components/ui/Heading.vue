<template>
  <component :is="tag" :class="customHeadingClass">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Heading',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    customHeadingClass: {
      type: String,
      default: 'heading-homepage',
    },
  },
})
</script>

<style lang="scss" scoped>
.heading-homepage {
  font-size: 60px;
  margin-bottom: 20px;
}

.heading-job-info {
  font-size: 20px;
}

.heading-job-company {
  font-size: 17px;
  letter-spacing: 0.4px;

  &.contact {
    margin-top: 0;
  }
}

.heading-job-info,
.heading-job-company {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #26a69a;
  margin-bottom: 0;
}

.heading-job-info,
.heading-job-company.description {
  margin-top: 10px;
}

.heading-job-company-name {
  font-size: 18.5px;
  font-style: italic;
  margin: 10px 0 10px 0;
}

.heading-form {
  font-size: 24px;
  margin: 10px 0 30px;
  text-align: center;
  text-transform: uppercase;
}

.heading-job-company-name,
.heading-form {
  font-weight: bold;
  color: orange;
  letter-spacing: 0.7px;
}
</style>
