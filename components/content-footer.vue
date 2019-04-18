<template>
  <footer class="social">
    <small
      class="social__description"
    >Take a look at my work on Github, or read about my work experience on LinkedIn</small>
    <ul class="social__row">
      <li class="social__item">
        <a class="social__link" href="https://github.com/Mennauu" target="_blank" rel="noopener">
          <img src="github.svg" alt="Github" class="social__image">Github
        </a>
      </li>
      <li class="social__item">
        <a
          class="social__link"
          href="https://www.linkedin.com/in/menno-de-vries/"
          target="_blank"
          rel="noopener"
        >
          <img src="linkedin.svg" alt="LinkedIn" class="social__image">
          LinkedIn
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
@import "~assets/scss/_variables.scss";

.social__description {
  position: relative;
  padding-top: 4em;
}

.social__description::before {
  content: "";
  background-color: $gray;
  height: 1px;
  left: 0;
  position: absolute;
  top: 0;
  width: 12rem;
}

.social__row {
  display: flex;
  margin-top: 1em;
}

.social__item {
  + .social__item {
    margin-left: 2em;
  }
}

.social__link {
  display: flex;
  align-items: center;
  color: $gray-dark;
}

.social__image {
  max-width: 1.5em;
  margin-right: 0.4em;
}
</style>