<template>
  <main role="main">
    <h1>Work</h1>
    <p class="description">
      Over the last
      <strong>8 years</strong> I've build a lot of projects. Here you can find a couple of them. Curious for more? Let's have a
      <a
        href="/contact"
      >cup of coffee</a>, or take a look at my
      <a
        href="https://github.com/Mennauu"
        target="_blank"
        rel="noopener"
      >GitHub</a>.
    </p>
    <ul class="portfolio">
      <li class="portfolio__item" v-for="(item, index) in items" :key="index" :class="item.slug">
        <a :href="'/work/' + item.slug" class="portfolio__item--link">
          <img :src="'/' + item.image" :alt="item.title" />
          <div class="portfolio__item--content">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <!-- <small class="portfolio__item--tag" v-for="(tag, index) in item.tags" :key="index">{{tag}}</small> -->
          </div>
        </a>
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
          description: "Website reseller website",
          tags: ["Website", "Progressive enhancement tool"],
          image: "webgaan_thumbnail.png",
          slug: "webgaan"
        },
        {
          title: "ABC Legal",
          description: "Law firm website",
          tags: ["Website", "WordPress"],
          image: "abclegal_thumbnail.png",
          slug: "abc-legal"
        },
        {
          title: "Havenstad",
          description: "2018 and 2040 comparison website",
          tags: ["Website", "Prototype"],
          image: "gemeenteamsterdam_thumbnail.png",
          slug: "havenstad"
        },
        {
          title: "Linernote",
          description: "Social Music app",
          tags: ["App Design", "Website", "PWA"],
          image: "linernote_thumbnail.png",
          slug: "linernote"
        },
        {
          title: "OBA",
          description: "Information chart using D3",
          tags: ["App Design", "Progressive enhancement"],
          image: "oba_thumbnail.png",
          slug: "oba"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";

.description {
  margin-bottom: 4rem;
}

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
  transition: 0.5s;

  @media (max-width: 1000px) {
    min-height: 10em;
  }

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
    transition: 0.5s;

    @media (max-width: 1000px) {
      max-width: 8em;
      height: 8em;
      top: -1em;
      left: -1.25em;
    }
  }

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 1em;
  }

  &:hover {
    img {
      transform: translateY(-0.8em);
    }
  }
}

.portfolio__item--link {
  color: $black;
  position: absolute;
  height: 100%;
  width: 100%;

  &:hover {
    color: $black;
  }
}

.portfolio__item--content {
  padding: 2.5em 1.3em 2.5em 1.3em;
  margin-top: -0.37em;
  margin-left: 10em;
  transition: 0.5s;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-left: 7em;
  }

  p {
    margin-bottom: 0;
    font-weight: 400;
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

  &:hover {
    background-color: lighten($webgaan, 25%);
  }
}
.abc-legal {
  background-color: lighten($abc-legal, 50%);

  &:hover {
    background-color: lighten($abc-legal, 40%);
  }
}
.oba {
  background-color: lighten($oba, 50%);

  &:hover {
    background-color: lighten($oba, 40%);
  }
}
.havenstad {
  background-color: lighten($havenstad, 45%);

  &:hover {
    background-color: lighten($havenstad, 35%);
  }
}

.linernote {
  background-color: lighten($linernote, 25%);

  &:hover {
    background-color: lighten($linernote, 15%);
  }
}
</style>