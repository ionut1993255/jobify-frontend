<template>
  <div>
    <CustomButton
      v-for="navLink in navLinks"
      :key="navLink.id"
      :label="navLink.label"
      :to="navLink.to"
      flat
      :class="['custom-button', { 'active-link': isActiveLink(navLink.to) }]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { NavLink } from 'components/types/interfaces.ts'
import CustomButton from './CustomButton.vue'

export default defineComponent({
  name: 'NavLinks',
  components: { CustomButton },
  data() {
    return {
      navLinks: [
        { id: 1, label: 'Home', to: '/' },
        { id: 2, label: 'Jobs', to: '/jobs' },
        { id: 3, label: 'Contact', to: '/contact-us' },
      ] as NavLink[],
    }
  },
  methods: {
    isActiveLink(routePath: string) {
      return this.$route.path === routePath
    },
  },
})
</script>

<style lang="scss" scoped>
div {
  display: flex;
  gap: 20px;
}
</style>
