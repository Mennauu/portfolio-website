<template>
  <div>
    <item-preview-image :src="image.src" :alt="image.alt" />
  </div>
</template>

<script>
import itemPreviewImage from "~/components/item-preview-image.vue";

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

.preview__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>