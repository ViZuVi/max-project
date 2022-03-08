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
        <AppProductCard
          v-for="(product, i) in products"
          :key="product.id"
          :product="product"
          :index="i"
        />
      </div>
      <AppButton
        label="Загрузить еще"
        className="best-products__load-btn"
      />
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppTabs from "~/components/ui/AppTabs";
import AppButton from "~/components/ui/AppButton";
import AppProductCard from "~/components/ui/cards/AppProductCard";

export default {
  name: "BestProducts",
  components: {
    AppSectionTitle,
    AppTabs,
    AppButton,
    AppProductCard,
  },
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    const products = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/catalog/popular/products"
    );
    this.products = products.items;
  },
};
</script>

<style lang="scss" scoped>
.best-products {
  border-bottom: $border;
  background-color: #f8f8f8;
  width: 100%;
}
.best-products__wrapper {
  @include section-size;
}
.best-products__list {
  display: flex;
  flex-wrap: wrap;
}
.best-products__load-btn {
  margin-top: 33px;
}
</style>