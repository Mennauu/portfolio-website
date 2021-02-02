<template>
  <main role="main">
    <h1>About</h1>
    <p class="lead">Hi! I'm Menno, 24 years old and a student at the University of Amsterdam.</p>
    <p>
      In addition to improving my coding skills, I like to interfere with performance, design and accessibility. In my free time, I enjoy cooking and working out. I
      <del>try to</del> follow a healthy lifestyle. I also like to play competitive online games or hang out in the park, drinking coffee. I love being surrounded by social people.
    </p>
    <p>On workdays you can find me in Amsterdam and during the weekends in Heerenveen.</p>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit("SET_PAGE", "about");
    store.commit("SET_IMAGE", {
      src: "/about.jpeg",
      alt: "About"
    });
  }
};
</script>