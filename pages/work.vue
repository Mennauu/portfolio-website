<template>
  <main role="main">
    <h1>Work</h1>
    <p>Test test test</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit('SET_PAGE', 'work')
    store.commit('SET_IMAGE', {
      src: '/work.jpeg',
      alt: 'Work'
    })
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
</style>