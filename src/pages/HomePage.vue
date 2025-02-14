<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from 'components/home/Home.vue'

export default defineComponent({
  name: 'HomePage',
  components: { Home },
})
</script>
