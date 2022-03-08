<template>
  <div class="product-card-small">
    <nuxt-link class="product-card-small__img-link" :to="`/catalog/electronics/${product.id}`">
      <img class="product-card-small__img" :src="product.image" :alt="product.title" />
    </nuxt-link>
    <div class="product-card-small__info">
      <nuxt-link :to="`/catalog/electronics/${product.id}`" class="product-card-small__title">{{
        product.title
      }}</nuxt-link>
      <span class="product-card-small__price">{{ product.price }} ₽/шт</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProductCardSmall",
  props: {
    product: {
      product: {
        type: Object,
        required: true,
        default: () => {},
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card-small {
  display: flex;
  padding: 14px;
  background-color: #ffffff;
  width: 261.6px;
  border: $border;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  width: 100%;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);
  }
}
.product-card-small__info {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.product-card-small__title {
  display: flex;
  align-items: center;
  height: 54px;
  font-size: 0.867em;
  line-height: 1.385em;
  color: $text-black-3;
  &:hover {
    color: $text-link-hover;
  }
}
.product-card-small__price {
  font-weight: bold;
  font-size: 0.933em;
  line-height: 1.501em;
  color: $text-black-3;
}
.product-card-small__img-link {
  display: block;
  flex-shrink: 0;
}
.product-card-small__img {
  display: block;
  width: 90px;
  height: 90px;
}
</style>
