<template>
  <nav role="navigation" aria-label="Main navigation" class="menu">
    <ul class="menu__row">
      <li class="menu__item">
        <nuxt-link to="/" class="menu__link">Home</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/work" class="menu__link">Work</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/about" class="menu__link">About</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/contact" class="menu__link">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "~assets/scss/_variables.scss";

@media (min-width: 900px) {
  .menu {
    padding-bottom: 4em;
  }
}
.menu__row {
  display: flex;
}

.menu__item {
  + .menu__item {
    margin-left: 1em;
  }
}

.menu__link {
  color: $gray-dark;
  font-weight: 400;
}

.menu {
  .nuxt-link-exact-active {
    color: $black;
    font-weight: 700;
  }
}
</style>