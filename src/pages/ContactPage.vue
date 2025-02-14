<template>
  <Contact />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contact from 'components/contact/Contact.vue'

export default defineComponent({
  name: 'ContactPage',
  components: { Contact },
})
</script>
