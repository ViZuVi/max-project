<template>
  <div class="banner-top">
    <div class="banner-top__title-wrapper">
      <span>{{ section.title }}</span>
      <span>{{ city }}</span>
      <span class="banner-top__products-count">{{ productsCount }}</span>
    </div>
    <div class="banner-top__breadcrumbs">
      <AppBreadcrumbs
        class="banner-top__breadcrumbs"
        :items="[
          { title: 'Главная', link: '/' },
          { title: 'Каталог', link: '/catalog' },
          { title: section.title, link: '' },
        ]"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppBreadcrumbs from "~/components/ui/AppBreadcrumbs";

export default {
  name: "BannerTop",
  components: {
    AppBreadcrumbs,
  },
  computed: {
    ...mapState(["city"]),
    ...mapState("products", ["section", "products", "productsCount"]),
  },
};
</script>

<style lang="scss" scoped>
.banner-top {
  min-height: 372px;
  background-image: url("~assets/img/catalog-banner.jpg");
  //  background-image: url("~assets/img/banner-bottom-electronics.jpg");
}
</style>
