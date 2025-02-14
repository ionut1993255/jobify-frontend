<template>
  <img :src="src" :alt="alt" :class="customImgClass" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Image',
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      required: true,
    },
    customImgClass: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.home-bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;
}

.page-not-found-bg-img {
  width: 50%;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
  pointer-events: none;
}
</style>
