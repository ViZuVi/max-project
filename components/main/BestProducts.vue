<template>
  <section class="best-products">
    <div class="best-products__wrapper">
      <SectionTitle
        title="Лучшие предложения"
        allName="Весь каталог"
        allLink="/catalog"
      >
        <AppTabs :tabs="['Хит', 'Советуем', 'Новинка', 'Акция']" />
      </SectionTitle>
      <div class="best-products__list"></div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle";
import AppTabs from "~/components/ui/AppTabs";

export default {
  name: "BestProducts",
  components: {
    SectionTitle,
    AppTabs,
  },
};
</script>

<style lang="scss" scoped>
.best-products {
  // TODO: border - variable?
  border: 1px solid #ececec;
  background-color: #f8f8f8;
}
.best-products__wrapper {
  @include section-size;
}
</style>