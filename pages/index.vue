<template>
  <div>
    <BannerTop />
    <BannerBottom />
    <FeaturesList />
    <PopularCategories />
    <BestProducts />
  </div>
</template>

<script>
import BannerTop from "~/components/main/BannerTop";
import BannerBottom from "~/components/main/BannerBottom";
import FeaturesList from "~/components/main/FeaturesList";
import PopularCategories from "~/components/main/PopularCategories";
import BestProducts from "~/components/main/BestProducts";

export default {
  components: {
    BannerTop,
    BannerBottom,
    FeaturesList,
    PopularCategories,
    BestProducts,
  },
  // TODO: add ESLint and StyleLint
  // TODO: check build in the end
};
</script>