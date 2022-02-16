<template>
  <div>
    <BannerTop />
    <BannerBottom />
    <FeaturesList />
    <PopularCategories />
    <BestProducts />
    <DayOffer />
    <AdsList />
  </div>
</template>

<script>
import BannerTop from "~/components/main/BannerTop";
import BannerBottom from "~/components/main/BannerBottom";
import FeaturesList from "~/components/main/FeaturesList";
import PopularCategories from "~/components/main/PopularCategories";
import BestProducts from "~/components/main/BestProducts";
import DayOffer from "~/components/main/DayOffer";
import AdsList from "~/components/main/AdsList";

export default {
  components: {
    BannerTop,
    BannerBottom,
    FeaturesList,
    PopularCategories,
    BestProducts,
    DayOffer,
    AdsList
  },
  // TODO: add ESLint and StyleLint
  // TODO: check build in the end
};
</script>