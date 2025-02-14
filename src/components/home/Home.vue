<template>
  <Navbar />

  <div class="homepage-container">
    <Image :src="homeBgImg" alt="home-bg-img" customImgClass="home-bg-img" />

    <div class="homepage-content-overlay">
      <Heading tag="h1" customHeadingClass="heading-homepage">
        Welcome to <span>Jobify</span>
      </Heading>
      <CustomButton label="Explore Jobs" to="/jobs" btnClass="explore-jobs-btn" />
    </div>
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homeBgImg from '../../assets/img/home-bg-img.jpg'
import Navbar from 'components/ui/Navbar.vue'
import Image from 'components/ui/Image.vue'
import Heading from 'components/ui/Heading.vue'
import CustomButton from 'components/ui/CustomButton.vue'
import Footer from 'components/ui/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: { Navbar, Image, Heading, CustomButton, Footer },
  data() {
    return {
      homeBgImg,
    }
  },
})
</script>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 150px);
  position: relative;
  padding-left: 10%;
}

.homepage-content-overlay {
  max-width: 800px;
  position: relative;
  color: white;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  padding: 60px;
  border-radius: 10px;
}

span {
  font-weight: 600;
  font-style: italic;
  color: orange;
  letter-spacing: 0.7px;
}
</style>
