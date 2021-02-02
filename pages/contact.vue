<template>
  <main role="main">
    <h1>Contact</h1>
    <p class="lead">Let's work together!</p>
    <p>
      Give me a
      <a href="tel:+31621195761">call</a> or ping me on
      <a href="whatsapp://send?text=Hello Menno!&phone=+31621195761">WhatsApp</a>
    </p>
    <span class="mt-2">
      <img src="/phone.svg" alt="Phone" class="social__image" />
      <a href="tel:+31621195761" class="social__link">0621195761</a>
    </span>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit("SET_PAGE", "contact");
    store.commit("SET_IMAGE", {
      src: "/iphone.svg",
      alt: "iphone"
    });
  }
};
</script>

<style scoped lang="scss">
@import "~assets/scss/_variables.scss";

.lead {
  margin-bottom: 0;
}

span {
  display: flex;
  align-items: center;
  margin-top: 2em;
}
</style>