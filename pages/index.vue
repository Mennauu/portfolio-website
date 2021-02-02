<template>
  <main role="main">
    <h1>Menno de Vries</h1>
    <p class="lead">
      I'm a
      <strong>front-end developer</strong> and
      <strong>designer</strong>, studying at the University of Amsterdam. I have a passion for concepting and building digital products.
    </p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit("SET_PAGE", "home");
    store.commit("SET_IMAGE", {
      src: "/menno.jpeg",
      alt: "Menno de Vries"
    });
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
</style>
