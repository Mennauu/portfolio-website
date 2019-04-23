<template>
  <main role="main">
    <h1>Work</h1>
    <p>
      Over the last
      <strong>8 years</strong> I've build a lot of projects. Here you can find a couple of them. Curious for more? Let's have a
      <a
        href="/contact"
      >cup of coffee</a>, or checkout my
      <a href="https://github.com/Mennauu" target="_blank" rel="noopener">GitHub</a>.
    </p>
    <ul class="portfolio">
      <li class="portfolio__item" v-for="(item, index) in items" :key="index" :class="item.slug">
        <img :src="'/' + item.image" :alt="item.title">
        <div class="portfolio__item--content">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <small class="portfolio__item--tag" v-for="(tag, index) in item.tags" :key="index">{{tag}}</small>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    store.commit("SET_PAGE", "work");
    store.commit("SET_IMAGE", {
      src: "/work.jpeg",
      alt: "Work"
    });
  },

  data() {
    return {
      items: [
        {
          title: "Webgaan",
          description: "Website provider",
          tags: ["Website", "Progressive enhancement tool"],
          image: "webgaan_thumbnail.png",
          slug: "webgaan"
        },
        {
          title: "ABC Legal",
          description: "Law firm in Amsterdam",
          tags: ["Website", "WordPress"],
          image: "abclegal_thumbnail.png",
          slug: "abc-legal"
        },
        {
          title: "OBA",
          description: "Public Library of Amsterdam",
          tags: ["App Design", "Progressive enhancement"],
          image: "oba_thumbnail.png",
          slug: "oba"
        },
        {
          title: "Hamburger menu",
          description: "Hobby project",
          tags: ["Website", "Pure CSS"],
          image: "",
          slug: "hamburger-menu"
        },
        {
          title: "Pokédex",
          description: "Hobby project",
          tags: ["Website", "Modules", "Client-side"],
          image: "",
          slug: "pokedex"
        },
        {
          title: "Havenstad",
          description: "Municipality of Amsterdam",
          tags: ["Website", "Prototype"],
          image: "gemeenteamsterdam_thumbnail.png",
          slug: "havenstad"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";

.portfolio {
  max-width: 100%;
}

.portfolio__item {
  margin-left: 2em;
  min-height: 16em;
  margin-bottom: 3em;
  box-shadow: $shadow-small;
  border-radius: $border-radius;
  background-color: $gray-light;
  position: relative;
  display: flex;
  align-items: center;

  img {
    max-width: 11.5em;
    width: 100%;
    height: 11.5em;
    object-fit: cover;
    border-radius: $border-radius;
    box-shadow: $shadow-regular;
    position: absolute;
    left: -2em;
    top: 2.25em;
  }

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 1em;
  }
}

.portfolio__item--content {
  padding: 2.5em;
  margin-top: -0.37em;
  margin-left: 10em;

  p {
    margin-bottom: 0;
  }
}

.portfolio__item--tag {
  background-color: $white;
  padding: 0.5em;
  border-radius: $border-radius;
  margin-top: 1em;
  display: inline-block;

  &:first-of-type {
    margin-right: 0.5em;
  }
}

.webgaan {
  background-color: lighten($webgaan, 35%);
}
.abc-legal {
  background-color: lighten($abc-legal, 50%);
}
.oba {
  background-color: lighten($oba, 50%);
}
.havenstad {
  background-color: lighten($havenstad, 45%);
}
</style>