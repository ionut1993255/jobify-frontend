<template>
  <q-btn
    :type="type"
    :label="label"
    :to="to"
    :flat="flat"
    :unelevated="unelevated"
    :class="['custom-button', btnClass]"
    @click="$emit('click')"
  >
    <slot></slot>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: null,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    unelevated: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss" scoped>
.custom-button {
  font-size: 14px;
  color: white;
  padding: 8px 15px;
  border-radius: 10px;
  letter-spacing: 0.7px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.custom-button.active-link,
.custom-button.read-more-btn,
.custom-button.submit-btn {
  background-color: orange !important;
}

.custom-button.explore-jobs-btn,
.custom-button.go-home-btn,
.custom-button.edit-job-btn {
  background-color: #2c6b3f;
}

.custom-button.explore-jobs-btn,
.custom-button.go-home-btn {
  font-size: 16px;
  padding: 12px 24px;
}

.custom-button.toggle-description-btn,
.custom-button.read-more-btn {
  padding: 6px 12px;
}

.custom-button.explore-jobs-btn {
  margin-left: 130px;
}

.custom-button.go-home-btn {
  margin-top: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-button.toggle-description-btn {
  font-size: 11px;
  font-weight: 500;
  background-color: #26a69a;
  border-radius: 7px;
  letter-spacing: 0.6px;
}

.custom-button.read-more-btn {
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.custom-button.add-new-job-btn,
.custom-button.load-more-jobs-btn,
.custom-button.back-btn,
.custom-button.edit-job-btn,
.custom-button.delete-job-btn,
.custom-button.submit-btn {
  font-size: 15px;
  background-color: #357a71;
  padding: 10px 20px;
  letter-spacing: 0.7px;
}

.custom-button.load-more-jobs-btn {
  margin: auto;
}

.custom-button.back-btn {
  margin-left: 120px;
}

.custom-button.edit-job-btn {
  margin-right: 20px;
}

.custom-button.delete-job-btn {
  background-color: orangered;
}

.custom-button.submit-btn {
  margin-top: 3px;
}
</style>
