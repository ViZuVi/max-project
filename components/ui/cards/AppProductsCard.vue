<template>
  <v-card class="product-card">
    <div class="product-card__header">
      <h2 class="product-card__header-title">
        <nuxt-link
          class="product-card__header-link"
          :to="`/catalog/${product.id}`"
          >{{ product.name }}</nuxt-link
        >
      </h2>
      <div class="product-card__header-controls">
        <div class="product-card__header-btn-wrapper">
          <AppButton
            label="Отложить"
            className="app-button--transparent product-card__header-btn app-button--small"
          />
          <AppButton
            label="Сравнить"
            className="app-button--transparent product-card__header-btn app-button--small"
          />
        </div>
        <div>{{ product.rating }}</div>
        <nuxt-link :to="`/info/brands/${product.brand}`">
          <img src="" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div class="product-card__main">
      <div class="product-card__img-wrapper">
        <div class="product-card__tags"></div>
        <div class="product-card__images">
          <img :src="product.images[0]" alt="" />
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__price">{{ product.price }} ₽/шт</div>
        <div class="product-card__quantity-wrapper">
          <span>{{ product.quantity }}</span>
          <span>Нашли дешевле?</span>
        </div>
        <div class="product-card__main-btn-wrapper">
          <AppButton
            label="Отложить"
            className="app-button--transparent product-card__header-btn app-button--small"
          />
          <AppButton
            label="Сравнить"
            className="app-button--transparent product-card__header-btn app-button--small"
          />
        </div>
        <div>{{ product.description }}</div>
        <div>
          <span>Характеристики</span>
          <div v-for="param in product.params" :key="param.name">
            <span>{{ param.type }}</span>
            <span>{{ param.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card__footer">
      <nuxt-link
        class="product-card__footer-details-btn"
        :to="`/catalog/${product.category}/${product.subCategory}/${product.id}`"
      >
        <span>Больше информации о товаре</span>
        <AppIcon symbol="" />
      </nuxt-link>
    </div>
  </v-card>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "AppProductsCard",
  components: {
    AppButton,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card__header {
  padding: 35px 37px 24px;
  border-bottom: 1px solid #f2f2f2;
}
.product-card__header-title {
  font-weight: 400;
  font-size: 1.733em;
  margin-bottom: 19px;
}
.product-card__header-link {
  color: #333333;
  &:hover {
    color: #365edc;
  }
}
.product-card__header-controls {
  display: flex;
}
.product-card__header-btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin-right: 38px;
}
.product-card__header-btn {
  margin-left: 0;
  &:first-child {
    margin-right: 8px;
  }
}
.product-card__img-wrapper {
  border-right: 1px solid #f2f2f2;
}
.product-card__main {
  display: flex;
}
.product-card__img-wrapper,
.product-card__info {
  flex-basis: 50%;
}
.product-card__info {
  padding: 32px 40px;
}
.product-card__footer-details-btn {
  display: block;
  padding: 16px 26px;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 0.7333em;
  text-transform: uppercase;
  border: 1px solid #f2f2f2;
  letter-spacing: 0.8px;
  background-color: #fafafa;
  color: #333333;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #365edc;
    border-color: #365edc;
    color: #ffffff;
  }
}
</style>
