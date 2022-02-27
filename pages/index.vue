<template>
  <div class="main-page">
    <BannerTop />
    <BannerBottom /> <!-- TODO: is banner needed -->
    <FeaturesList /> <!-- TODO: api - needed ? -->
    <PopularCategories />
    <BestProducts :isMobile="isMobile" />
    <DayOffer />
    <AdsList /> <!-- TODO: api - needed ? -->
    <SaleProducts /> <!-- TODO: api - needed ? -->
    <div
      class="main-page__promo"
      :style="{ backgroundImage: `url(${promoImg})` }"
    ></div> <!-- TODO: api - needed ? -->
    <CollectionsList /> 
    <LookBooks /> <!-- TODO: api - needed ? -->
    <!-- <Stories /> --> <!-- TODO: api - needed ? -->
    <Reviews />
    <!-- <BannersMiddle />  --> <!-- TODO: api - needed ? -->
    <Blog />
    <Map />
    <Company />
    <Brands />
    <!-- <Instagram /> --><!-- TODO: api - needed ? -->
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
import SaleProducts from "~/components/main/SaleProducts";
import CollectionsList from "~/components/main/CollectionsList";
import LookBooks from "~/components/main/LookBooks";
import Stories from "~/components/main/Stories";
import Reviews from "~/components/main/Reviews";
import BannersMiddle from "~/components/main/BannersMiddle";
import Blog from "~/components/main/Blog";
import Map from "~/components/main/Map";
import Company from "~/components/main/Company";
import Brands from "~/components/main/Brands";
import Instagram from "~/components/main/Instagram";

export default {
  components: {
    BannerTop,
    BannerBottom,
    FeaturesList,
    PopularCategories,
    BestProducts,
    DayOffer,
    AdsList,
    SaleProducts,
    CollectionsList,
    LookBooks,
    Stories,
    Reviews,
    BannersMiddle,
    Blog,
    Map,
    Company,
    Brands,
    Instagram,
  },
  layout: "hero",
  data() {
    return {
      promoImg: require("~/assets/img/promo.jpg"),
    };
  },
  computed: {
    isMobile() {
      // TODO: To helpers? (+from layout)
      return process.client ? window.innerWidth <= 375 : false;
    },
  },
  // TODO: add ESLint and StyleLint
  // TODO: check build in the end
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