<template>
  <div class="product-description">
    <div>{{ product.description }}</div>
    <div class="product-description__docs">
      <div class="product-description__title font-large">Документы</div>
      <SectionCard></SectionCard>
    </div>
  </div>
</template>

<script>
import SectionCard from "../SectionCard";

export default {
  name: "ProductDescription",
  components: {
SectionCard
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
.product-description__docs {
  margin: 3.133rem 0 3.133rem;
}
.product-description__title {
  padding-bottom: 1.933rem;
}
</style>