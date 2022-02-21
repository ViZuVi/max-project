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
        <div v-for="(product, i) in products" :key="product.id">
          <BestProductCard :product="product"  :index="i" />
        </div>
      </div>
      <AppButton label="Загрузить еще" className="transparant" />
    </div>
  </section>
</template>

<script>
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
  data() {
    return {
      // TODO: this is mocks, delete; check image
      products: [
        {
          id: 1,
          name: "Косуха из натуральной кожи",
          rating: 0,
          count: "many",
          code: "A36955R7",
          price: 16800,
          images: [require("~/assets/img/best-product-prime.jpg")],
        },
        {
          id: 2,
          name: "Смартфон SY 15",
          rating: 0,
          count: "many",
          code: "A36955R7",
          price: 36000,
          images: [
            require("~/assets/img/best-product-phone-1.jpg"),
            require("~/assets/img/best-product-phone-2.jpg"),
            require("~/assets/img/best-product-phone-3.jpg"),
          ],
        },
        {
          id: 3,
          name: "Смартфон SY 15",
          rating: 0,
          count: "many",
          code: "A36955R7",
          price: 36000,
          images: [
            require("~/assets/img/best-product-phone-1.jpg"),
            require("~/assets/img/best-product-phone-2.jpg"),
            require("~/assets/img/best-product-phone-3.jpg"),
          ],
        },
        {
          id: 4,
          name: "Смартфон SY 15",
          rating: 0,
          count: "many",
          code: "A36955R7",
          price: 36000,
          images: [
            require("~/assets/img/best-product-phone-1.jpg"),
            require("~/assets/img/best-product-phone-2.jpg"),
            require("~/assets/img/best-product-phone-3.jpg"),
          ],
        },
        {
          id: 5,
          name: "Смартфон SY 15",
          rating: 0,
          count: "many",
          code: "A36955R7",
          price: 36000,
          images: [
            require("~/assets/img/best-product-phone-1.jpg"),
            require("~/assets/img/best-product-phone-2.jpg"),
            require("~/assets/img/best-product-phone-3.jpg"),
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.best-products {
  // TODO: border - variable?
  border-bottom: 1px solid #ececec;
  background-color: #f8f8f8;
}
.best-products__wrapper {
  @include section-size;
}
.best-products__list {
  display: flex;
  flex-wrap: wrap;
}
</style>