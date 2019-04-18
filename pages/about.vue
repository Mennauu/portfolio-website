<template>
  <main role="main">
    <h1>About</h1>
    <p class="lead">Hi! I'm Menno, 24 years old and a student at the University of Amsterdam</p>
    <p>In addition to improving my coding skills, I like to interfere with clean and beautiful design. In my free time I nerd away at games or hang out in the park, drinking coffee.</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit('SET_PAGE', 'about')
    store.commit('SET_IMAGE', {
      src: '/about.jpeg',
      alt: 'About'
    })
  }
}
</script>