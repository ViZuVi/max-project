<template>
  <section class="stories">
    <v-tabs height="305" hide-slider>
      <v-tab
        v-for="story in stories"
        :key="story.value"
        nuxt
        active-class="stories__tab--active"
        class="stories__tab"
        :ripple="false"
      >
        <nuxt-link to="#" class="stories__item">
          <span
            class="stories__img-wrapper"
            :style="{ backgroundImage: `url(${story.image})` }"
          ></span>
          <nuxt-link to="#" class="stories__title font-small"
            >test title</nuxt-link
          >
        </nuxt-link>
      </v-tab>
    </v-tabs>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
    };
  },
  async fetch() {
    const stories = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/stories"
    );
    this.stories = stories.itemж;
  },
};
</script>

<style lang="scss" scoped>
.stories {
  border-bottom: $border;
  max-width: $max-width;
  margin: 0 auto;

  .stories__title {
    text-transform: unset;
    letter-spacing: unset;
  }

  .stories__tab {
    &:hover {
      &::before {
        content: none;
      }
    }
  }
}
.stories__list {
  display: flex;
  flex-wrap: wrap;
}
.stories__item {
  display: block;
  width: 126px;
  text-align: center;
  &:hover {
    .stories__img-wrapper {
      opacity: 0.7;
    }
  }
}
.stories__img-wrapper {
  display: block;
  width: 100%;
  height: 126px;
  margin-right: 32px;
  margin-bottom: 5px;
  border-radius: 50%;
  background-size: cover;
  transition: opacity 0.2s ease-in-out;
}
</style>