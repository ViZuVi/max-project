<template>
  <div class="recommended-products">
    <div class="recommended-products__title">Персональные рекомендации</div>
    <v-carousel
      class="reviews__carousel"
      hide-delimiters
      height="auto"
      show-arrows-on-hover
    >
    <!-- TODO: customize arrows -->
      <v-carousel-item v-for="product in products" :key="product.id">
        <v-sheet>
          <div class="recommended-products__card">
            <div class="recommended-products__img-wrapper">
              <nuxt-link
                class="recommended-products__img-link"
                :to="`/catalog/${product.category}/${product.subCategory}/${product.id}`"
              >
                <img
                  class="recommended-products__img"
                  :src="product.image"
                  :alt="product.title"
                />
              </nuxt-link>
              <div class="recommended-products__info-wrapper">
                <nuxt-link
                  class="recommended-products__card-title"
                  :to="`/catalog/${product.category}/${product.subCategory}/${product.id}`"
                  >{{ product.title }}</nuxt-link
                >
                <span class="recommended-products__price"
                  >{{ product.price }} ₽</span
                >
              </div>
            </div>
            <AppButton
              label="Подробнее"
              className="app-button--transparent app-button--small recommended-products__details"
              @click="
                $router.push(
                  `/catalog/${product.category}/${product.subCategory}/${product.id}`
                )
              "
            />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "RecommendedProducts",
  components: {
    AppButton,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Трехколесный велосипед для девочек Луна",
          price: "4 123.20",
          image: require("~/assets/img/recommended-1.jpg"),
          category: "transport",
          subCategory: "kids",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommended-products {
  padding-bottom: 50px;
}
.recommended-products__title {
  color: #333333;
  margin-bottom: 19px;
  font-size: 1.333em;
  line-height: 1.5625em;
}
.recommended-products__card {
  padding: 19px;
  border: 1px solid #ececec;
  width: 337.75px;
  margin-right: -1px;
}
.recommended-products__img-wrapper {
  display: flex;
}
.recommended-products__img-link {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  margin-right: 9px;
}
.recommended-products__info-wrapper {
  display: flex;
  flex-direction: column;
}
.recommended-products__card-title {
  line-height: 1.385em;
  font-size: 0.867em;
  color: #333333;
  &:hover {
    color: #365edc;
  }
}
.recommended-products__price {
  font-size: 0.933em;
  line-height: 25px;
  font-weight: bold;
}
.recommended-products__details {
  margin-top: 8px;
  font-size: 10px;
  line-height: 12px;
  padding: 10px 14px 8px;
  border-color: rgba(56, 94, 220, 0.35);
}
</style>