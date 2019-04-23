<template>
  <div class="layout__content">
    <contentNavigation/>
    <transition name="fade" mode="out-in">
      <nuxt/>
    </transition>
    <contentFooter/>
  </div>
</template>

<script>
import contentFooter from "~/components/content-footer.vue";
import contentNavigation from "~/components/content-navigation.vue";

export default {
  components: {
    contentFooter,
    contentNavigation
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";

.layout__content {
  padding: 1.5em;
  background-color: $white;

  @media (min-width: 768px) {
    padding: 4em;
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    overflow: auto;
  }
}

main {
  margin-top: 4em;
  margin-bottom: 7em;

  @media (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>