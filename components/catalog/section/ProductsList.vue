<template>
  <div
    class="product-list"
    :class="viewSize === 'large' ? 'product-list--large' : ''"
  >
    <BestProductCard
      class="product-list__item"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <AppButton label="Показать еще" class="product-list__show-more-btn" />
  </div>
</template>

<script>
import BestProductCard from "~/components/main/BestProductCard";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "ProductsList",
  components: {
    BestProductCard,
    AppButton,
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
    viewType: {
      type: String,
      required: true,
      default: () => "tile",
    },
    viewSize: {
      type: String,
      required: false,
      default: () => "small",
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;

  &--large {
    .product-list__item {
      max-width: calc(100% / 3);
    }
  }
}
.product-list__show-more-btn {
  width: 100%;
  background-color: #fafafa;
  border: $border;
  color: $text-black-3;
  padding-top: 21px;
  padding-bottom: 21px;
  font-size: 0.733em;
  line-height: 1.3em;
  margin-bottom: 30px;
}
</style>
