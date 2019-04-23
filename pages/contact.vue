<template>
  <main role="main">
    <h1>Contact</h1>
    <p>Want to work together? Give me a call, send a whatsapp or private message on LinkedIn.</p>
    <span>
      <img src="/phone.svg" alt="Phone" class="social__image">
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

<style scoped>
span {
  display: flex;
  align-items: center;
  margin-top: 1em;
}
</style>