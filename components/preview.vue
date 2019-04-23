<template>
  <div class="layout__preview">
    <preview-image :src="image.src" :alt="image.alt"/>
  </div>
</template>

<script>
import previewImage from "~/components/preview-image.vue";

export default {
  components: {
    previewImage
  },

  computed: {
    image() {
      return this.$store.state.image;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";

.layout__preview {
  flex: 1 1 50%;
  position: relative;
  overflow: hidden;
  height: 45vh;

  @media (min-width: 768px) {
    height: auto;
  }
}

.preview__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>