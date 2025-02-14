<template>
  <q-header elevated class="bg-primary">
    <q-toolbar>
      <q-icon name="work" size="32px" class="text-orange text-italic" />
      <q-toolbar-title class="text-h4 text-bold text-italic">Jobify</q-toolbar-title>

      <NavLinks />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from 'components/ui/NavLinks.vue'

export default defineComponent({
  name: 'Navbar',
  components: { NavLinks },
})
</script>

<style lang="scss" scoped>
.q-header.bg-primary {
  display: flex;
  align-items: center;
  height: 90px;
  position: fixed;
  background-color: #2c6b3f !important;
  padding: 0 20px;
  border-bottom: 1px solid white;
}

.ellipsis {
  letter-spacing: 1.2px;
}
</style>
