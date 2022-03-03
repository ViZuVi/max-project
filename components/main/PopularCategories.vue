<template>
  <section class="popular-categories">
    <AppSectionTitle
      title="Популярные категории"
      allName="Весь каталог"
      allLink="/catalog"
    />
    <div class="popular-categories__list">
      <div
        class="popular-categories__item"
        v-for="category in categories"
        :key="category.title"
      >
        <!-- TODO: static - change link address when it appears in api -->
        <nuxt-link class="popular-categories__link" to="#">
          <img
            width="80"
            height="80"
            class="popular-categories__img"
            :src="category.image"
            :alt="category.title"
          />
          {{ category.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";

export default {
  name: "PopularCategories",
  components: {
    AppSectionTitle,
  },
  data() {
    return {
      categories: [],
    };
  },
  async fetch() {
    const categories = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/blog"
    );
    this.categories = categories.item;
  },
};
</script>

<style lang="scss" scoped>
.popular-categories {
  @include section-size;
  border-bottom: $border;
}
.popular-categories__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.popular-categories__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 39px 10px 35px;
  background-color: #ffffff;
  border: $border;
  flex-grow: 1;
  min-width: 20%;
  width: 270px;
  max-width: 270px;
  margin-right: -1px;
  margin-top: -1px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transition: transform ease 0.2s, box-shadow ease 0.2s;
  }
  @include adapt-mobile {
    max-width: 50%;
    width: 50%;
  }
}
.popular-categories__link {
  text-align: center;
  color: inherit;
}
.popular-categories__img {
  display: block;
  margin-bottom: 16px;
  margin-right: auto;
  margin-left: auto;
}
</style>
