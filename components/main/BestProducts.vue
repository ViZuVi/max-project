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
          v-for="(product, i) in products"
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
          rating: 4.4,
          count: "many",
          code: "A36955R7",
          price: 16800,
          images: [require("~/assets/img/best-product-prime.jpg")],
          brand: {
            id: 1,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
        },
        {
          id: 2,
          name: "Смартфон SY 15",
          rating: 3.8,
          count: "many",
          code: "A36955R7",
          price: 36000,
          images: [
            require("~/assets/img/best-product-phone-1.jpg"),
            require("~/assets/img/best-product-phone-2.jpg"),
            require("~/assets/img/best-product-phone-3.jpg"),
          ],
          brand: {
            id: 2,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
          deliveryPrice: 390,
          // TODO: description in mocks?
          description:
            "Яркие впечатления возможны даже после прошедших мероприятий. Широкоугольная камера и интеллектуальная система съемки уже наравне с профессиональными камерами!",
          properties: [
            {
              id: 1,
              title: "Стоимость",
              code: "price",
              type: "range",
              value: "500",
              measure: "мг.",
            },
            {
              id: 2,
              title: "Стоимость",
              code: "price",
              type: "range",
              value: "500",
              measure: "мг.",
            },
            {
              id: 3,
              title: "Стоимость",
              code: "price",
              type: "range",
              value: "500",
              measure: "мг.",
            },
            {
              id: 4,
              title: "Стоимость",
              code: "price",
              type: "range",
              value: "500",
              measure: "мг.",
            },
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
          brand: {
            id: 3,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
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
          brand: {
            id: 4,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
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
          brand: {
            id: 5,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
        },
        {
          id: 6,
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
          brand: {
            id: 6,
            title: "vrand",
            image: require("~/assets/img/brands-1.png"),
          },
          availability: "Много",
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