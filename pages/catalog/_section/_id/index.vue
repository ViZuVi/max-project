<template>
  <div class="catalog">
    <ProductDetails :product="product" />
  </div>
</template>

<script>
import ProductDetails from "~/components/catalog/ProductDetails";
import mockProduct from "~/components/catalog/mock-product";

export default {
  components: {
    ProductDetails,
  },
  async asyncData({ $axios, params }) {
    const product = await $axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/page/1"
    );
      console.log(product, params);
    // TODO: static - change mockProduct
    return {
      // product: product.item,
      product: mockProduct,
    };
  },
};
</script>