<template>
  <q-footer reveal elevated>
    <q-toolbar>
      <q-toolbar-title class="copyright">
        Copyright &#169; 2025 by <span>Jobify</span>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style lang="scss" scoped>
.q-footer {
  display: flex;
  height: 60px;
  background-color: #357a71;
  border-top: 1px solid white;
}

.copyright {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.7px;
}

span {
  font-size: 20px;
  font-style: italic;
  color: orange;
  letter-spacing: 0.7px;
}
</style>
