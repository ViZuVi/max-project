<template>
  <div class="product-details">
    <div class="product-details__header-wrapper">
      <div class="product-details__header">
        <h1 class="product-details__title">{{ product.title }}</h1>
        <AppIcon symbol="icon_share" className="product-details__header-icon" />
      </div>
      <div class="product-details__breadcrumbs"></div>
    </div>
    <div class="product-details__main">
      <div class="product-details__info-wrapper">
        <div class="product-details__img-wrapper">
          <div class="product-details__tags"></div>
          <div class="product-details__img">
            <img :src="product.image" :alt="product.title" />
          </div>
        </div>
        <div class="product-details__info">
          <div class="product-details__info-header">
            <div class="product-details__info-controls">
              <AppButton label="Отложить" className="app-button--transparent" />
              <AppButton label="Сравнить" className="app-button--transparent" />
            </div>
            <div class="product-details__rating">{{ product.rating }}</div>
            <nuxt-link
              :to="`/info/brands/${product.brand.title}`"
              class="product-details__brand-link"
            >
              <img :src="product.brand.image" :alt="product.brand.title" />
            </nuxt-link>
          </div>
          <div>
            <div class="product-details__characteristics">
              <div
                v-for="characteristic in product.characteristics"
                :key="characteristic.title"
                class="product-details__characteristic"
              >
                <span>{{ characteristic.title }}</span> —
                <span>{{ characteristic.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "ProductDetails",
  components: {
    AppIcon,
    AppButton,
  },
  data() {
    return {
      product: {
        id: 1,
        title: "Смартфон SY 15",
        priceType: "Цена в Москве",
        hit: true,
        discount: 10,
        quantity: 1,
        // TODO: format price
        userPrice: 35820.28,
        price: 36000,
        category: "electronics",
        subCategory: "phones",
        image: require("~/assets/img/best-product-phone-1.jpg"),
        saving: "127",
        brand: {},
        characteristics: [
          { title: "Разрешение экрана, пикс", value: "2280х1080" },
          { title: "Оперативная память (RAM), Гб ", value: "2280х1080" },
          { title: "Количество SIM-карт", value: "2280х1080" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.product-details__header-wrapper {
  width: $max-width;
  margin: 0 auto;
}
.product-details__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 42px;
  line-height: 25px;
}
.product-details__title {
  color: #333333;
  font-weight: normal;
  // TODO: to h1 styles
  font-size: 2.133em;
  line-height: 1.126em;
}
.product-details__header-icon {
  width: 41px;
  color: #b8b8b8;
  &:hover {
    color: #365edc;
  }
}
.product-details__breadcrumbs {
  padding: 15px 40px;
}
// .product-details__main {
// }
</style>