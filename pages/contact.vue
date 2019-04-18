<template>
  <main role="main">
    <h1>Menno de Vries</h1>
    <p>Test test test</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit('SET_PAGE', 'contact')
    store.commit('SET_IMAGE', {
      src: '/contact.jpg',
      alt: 'Contact'
    })
  }
}
</script>