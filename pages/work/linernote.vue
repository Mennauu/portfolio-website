<template>
  <main role="main">
    <h1>Linernote</h1>
  </main>
</template>

<script>
export default {
  layout: "item",

  async fetch({ store }) {
    store.commit("SET_PAGE", "linernote");
    store.commit("SET_IMAGE", {
      src: "/linernote.png",
      alt: "Linernote"
    });
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
</style>