<template>
  <div>
    <BannerTop />
    <section class="main-page">
      <SubsectionCards :subsections="mockSubsections" :section="section" />
      <div class="main-page__content-wrapper">
        <PageLeft />
        <SectionMain class="main-page__content-main" :products="mockProducts" />
      </div>
    </section>
  </div>
</template>

<script>
import BannerTop from "~/components/catalog/BannerTop";
import SubsectionCards from "~/components/catalog/section/SubsectionCards";
import PageLeft from "~/components/content/PageLeft";
import SectionMain from "~/components/catalog/section/SectionMain";

export default {
  components: {
    BannerTop,
    SubsectionCards,
    PageLeft,
    SectionMain,
  },
  layout: "hero",
  async asyncData({ $axios, params }) {
    const product = await $axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/catalog/popular/products"
    );
    // TODO: static - change mockProducts
    return {
      section: params.section,
      mockProducts: [
        ...product.items.map(item => ({...item, id: 1})),
        ...product.items.map(item => ({...item, id: 2})),
        ...product.items.map(item => ({...item, id: 3})),
        ...product.items.map(item => ({...item, id: 4})),
      ],
      mockSubsections: [
        {
          id: 1,
          title: "Телевизоры",
          count: 8,
          image: require("~/assets/img/icon-tv.svg"),
          code: "electronics",
        },
        {
          id: 2,
          title: "Аудиотехника",
          count: 10,
          image: require("~/assets/img/icon-tv.svg"),
          code: "electronics",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-page {
  max-width: $max-width;
  margin: 0 auto;
  padding: 50px 30px;
}
.main-page__content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.main-page__content-main {
  flex-grow: 1;
  // width: calc(100% - 277px);
}
</style>