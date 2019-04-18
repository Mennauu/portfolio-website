<template>
  <picture class="preview__image">
    <source :srcset="src" type="image/webp">
    <source :srcset="src" type="image/jpeg">
    <img :src="src" :alt="alt" class="preview__image">
  </picture>
</template>

<script>
export default {
  props: {
    alt: {
      default: ''
    },
    src: {
      required: true
    },
  },
}
</script>