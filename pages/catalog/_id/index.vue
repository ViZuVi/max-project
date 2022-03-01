<template>
  <div class="catalog">
    <ProductDetails />
  </div>
</template>

<script>
import ProductDetails from "~/components/catalog/ProductDetails";

export default {
  components: {
    ProductDetails,
  },
  // TODO: async data
};
</script>