<template>
  <div class="page-not-found-container">
    <div class="page-not-found-content">
      <div class="error-code">404</div>
      <div class="error-message">Page Not Found</div>
      <CustomButton label="Go Home" to="/" unelevated btnClass="go-home-btn" />
    </div>

    <Image
      :src="pageNotFoundBgImg"
      alt="page-not-found-bg-img"
      customImgClass="page-not-found-bg-img"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageNotFoundBgImg from '../assets/img/page-not-found-bg-img.png'
import CustomButton from 'components/ui/CustomButton.vue'
import Image from 'components/ui/Image.vue'

export default defineComponent({
  name: 'PageNotFound',
  components: { CustomButton, Image },
  data() {
    return {
      pageNotFoundBgImg,
    }
  },
})
</script>

<style lang="scss" scoped>
.page-not-found-container {
  height: 100vh;
  background-color: #9be3e2 !important;
}

.page-not-found-content {
  flex-direction: column;
  color: #2c6b3f;
  margin-right: 17%;
}

.page-not-found-container,
.page-not-found-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-code {
  font-size: 12vh;
  font-weight: bold;
  color: orange;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
}

.error-message {
  font-size: 40px;
  font-weight: 500;
  margin-top: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
