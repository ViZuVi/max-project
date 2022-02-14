<template>
  <div
    class="best-product-card"
    :class="index === 0 ? 'best-product-card--prime' : ''"
  >
    <div class="best-product-card__wrapper">
      <a
        href=""
        class="best-product-card__link"
        :style="{ backgroundImage: product.images[0] }"
      ></a>
      <div class="best-product-card__info">
        <div class="best-product-card__rating">{{ product.rating }}</div>
        <p>{{ product.name }}</p>
        <span>{{ product.count }}</span>
        <span>{{ product.count }}</span>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.best-product-card {
  &--prime {
    flex-basis: 50%;
  }
}
</style>