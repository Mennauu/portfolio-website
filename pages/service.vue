<template>
  <main role="main">
    <h1>Service</h1>
    <p>As a front-end developer and designer I have multiple skills in petto.</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit("SET_PAGE", "service");
    store.commit("SET_IMAGE", {
      src: "/service.jpeg",
      alt: "Service"
    });
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
</style>