<template>
  <section class="popular-categories">
    <SectionTitle
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
        <nuxt-link class="popular-categories__link" :to="category.link">
          <img
            width="80"
            height="80"
            class="popular-categories__img"
            :src="category.img"
            :alt="category.title"
          />
          {{ category.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import categories from "./categories-static";
import SectionTitle from "./SectionTitle";

export default {
  name: "PopularCategories",
  components: {
    SectionTitle,
  },
  data() {
    return {
      categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.popular-categories {
  @include section-size;
}
.popular-categories__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: #ececec;
  grid-gap: 1px;
  border: 1px solid #ececec;
  border-right: 0ch;
}
.popular-categories__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 39px 10px 35px;
  background-color: #ffffff;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transition: transform ease 0.2s, box-shadow ease 0.2s;
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
