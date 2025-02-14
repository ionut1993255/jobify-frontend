<template>
  <div v-if="isVisible" @click="close" class="modal-overlay">
    <div class="modal-container">
      <CustomButton @click="close" unelevated class="modal-close-btn">
        <q-icon name="close" size="20px" />
      </CustomButton>

      <div class="modal-content">
        <q-icon name="warning" size="35px" color="orange" class="modal-content-icon" />
        <p>{{ message }}</p>
      </div>

      <div class="modal-actions">
        <CustomButton @click="cancel" label="Cancel" class="modal-cancel-btn" />
        <CustomButton @click="confirm" label="Delete" class="modal-confirm-btn" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from 'components/ui/CustomButton.vue'

export default defineComponent({
  name: 'ConfirmDeleteModal',
  components: { CustomButton },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: 'Are you sure you want to perform this action?',
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm')
      this.$emit('update:isVisible', false)
    },

    cancel() {
      this.$emit('cancel')
      this.$emit('update:isVisible', false)
    },

    close() {
      this.$emit('close')
      this.$emit('update:isVisible', false)
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
}

.modal-container {
  width: 500px;
  position: relative;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
}

.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #777;
  padding: 10px;
  border-radius: 50%;
  transition: color 0.2s ease;
  cursor: pointer;
}

.modal-content {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 40px;
  margin-bottom: 20px;
}

.modal-content-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 165, 0, 0.1);
  padding: 15px;
  border-radius: 50%;
}

p {
  font-size: 18px;
  font-weight: 500;
  color: #777;
  margin-bottom: 0;
  letter-spacing: 0.2px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 13px;
}

.modal-confirm-btn,
.modal-cancel-btn {
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  letter-spacing: 0.7px;
  cursor: pointer;
}

.modal-confirm-btn {
  color: white;
  background-color: orangered;
}

.modal-cancel-btn {
  color: #777;
  background-color: white;
  border: 1px solid #ccc;
}
</style>
