<template>
  <div class="layout__container">
    <preview />
    <mainContent />
  </div>
</template>

<script>
import preview from "~/components/preview.vue";
import mainContent from "~/components/content.vue";

export default {
  components: {
    preview,
    mainContent
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";

html {
  font-family: $font-family-body;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: $black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  font-weight: 700;
  color: #e90e63;
  transition: color 0.4s;
}

a:hover {
  color: #e90e63;
}

h1 {
  font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 900;
  margin-bottom: 0.5em;
}

p {
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1100 - 300)));
  margin-bottom: 1em;
  color: $gray-dark;
}

p.lead {
  font-size: calc(18px + (22 - 18) * ((100vw - 300px) / (1100 - 300)));
  color: $black;
}

main {
  @media (min-width: 900px) {
    max-width: 36em;
  }
  padding-bottom: 3em;
}

.layout__container {
  @media (min-width: 900px) {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  transform: translateY(0);
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
