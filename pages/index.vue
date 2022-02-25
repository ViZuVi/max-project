<template>
  <div class="main-page">
    <BannerTop />
    <BannerBottom />
    <FeaturesList />
    <PopularCategories />
    <BestProducts v-if="popularProducts && popularProducts.length" />
    <DayOffer v-if="dayProducts && dayProducts.length" />
    <AdsList />
    <SaleProducts />
    <div
      class="main-page__promo"
      :style="{ backgroundImage: `url(${promoImg})` }"
    ></div>
    <CollectionsList />
    <LookBooks />
    <Stories />
    <Reviews />
    <BannersMiddle />
    <Blog />
    <Map />
    <Company />
    <Brands />
    <Instagram />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    ...mapState("products", ["popularProducts", "dayProducts"]),
  },
  methods: {
    ...mapActions(["getReviews", "getBlogPosts"]),
    ...mapActions("products", [
      "getPopularProducts",
      "getDayProducts",
      "getCollections",
    ]),
  },
  async created() {
    // TODO: delete after nuxtServerInit
    await this.getPopularProducts();
    await this.getDayProducts();
    await this.getReviews();
    await this.getBlogPosts();
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