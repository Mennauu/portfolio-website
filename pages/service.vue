<template>
  <main role="main">
    <h1>Service</h1>
    <p>Hi! I'm Menno, 2 years old and a student at the University of Amsterdam</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit('SET_PAGE', 'service')
    store.commit('SET_IMAGE', {
      src: '/service.jpeg',
      alt: 'Service'
    })
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
</style>