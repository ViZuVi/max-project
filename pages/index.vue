<template>
  <div class="main-page">
    <BannerTop />
    <BannerBottom />
    <FeaturesList />
    <PopularCategories />
    <BestProducts />
    <DayOffer />
    <SaleProducts /> 
    <CollectionsList /> 
    <Stories />
    <Reviews />
    <Blog />
    <Map />
    <Company />
    <Brands />
  </div>
</template>

<script>
import BannerTop from "~/components/main/BannerTop";
import BannerBottom from "~/components/main/BannerBottom";
import FeaturesList from "~/components/main/FeaturesList";
import PopularCategories from "~/components/main/PopularCategories";
import BestProducts from "~/components/main/BestProducts";
import DayOffer from "~/components/main/DayOffer";
import SaleProducts from "~/components/main/SaleProducts";
import CollectionsList from "~/components/main/CollectionsList";
import Stories from "~/components/main/Stories";
import Reviews from "~/components/main/Reviews";
import Blog from "~/components/main/Blog";
import Map from "~/components/main/Map";
import Company from "~/components/main/Company";
import Brands from "~/components/main/Brands";

export default {
  components: {
    BannerTop,
    BannerBottom,
    FeaturesList,
    PopularCategories,
    BestProducts,
    DayOffer,
    SaleProducts,
    CollectionsList,
    Stories,
    Reviews,
    Blog,
    Map,
    Company,
    Brands,
  },
  layout: "hero",
};
</script>

<style lang="scss" scoped>
.main-page__promo {
  height: 180px;
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>