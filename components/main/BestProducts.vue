<template>
  <section class="best-products">
    <div class="best-products__wrapper">
      <AppSectionTitle
        title="Лучшие предложения"
        allName="Весь каталог"
        allLink="/catalog"
      >
        <AppTabs :tabs="['Хит', 'Советуем', 'Новинка', 'Акция']" />
      </AppSectionTitle>
      <div class="best-products__list">
        <BestProductCard
          v-for="(product, i) in popularProducts"
          :key="product.id"
          :product="product"
          :index="i"
        />
      </div>
      <AppButton label="Загрузить еще" className="app-button--transparent" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppTabs from "~/components/ui/AppTabs";
import AppButton from "~/components/ui/AppButton";
import BestProductCard from "./BestProductCard";

export default {
  name: "BestProducts",
  components: {
    AppSectionTitle,
    AppTabs,
    AppButton,
    BestProductCard,
  },
  computed: {
    ...mapState("products", ["popularProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.best-products {
  // TODO: border - variable?
  border-bottom: 1px solid #ececec;
  background-color: #f8f8f8;
  width: 100%;
}
.best-products__wrapper {
  @include section-size;
}
.best-products__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>