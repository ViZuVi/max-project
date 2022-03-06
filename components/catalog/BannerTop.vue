<template>
  <div class="banner-top">
    <div class="banner-top__info-wrapper">
      <div class="banner-top__title-wrapper">
        <h1 class="banner-top__title">
          <span>{{ section.title }}</span>
          <span>{{ city }}</span>
        </h1>
        <span class="banner-top__products-count font-small">{{
          productsCount
        }}</span>
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
  position: relative;
  min-height: 372px;
  background-image: url("~assets/img/catalog-banner.jpg");
}
.banner-top__info-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: $max-width;
}
.banner-top__title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.banner-top__title {
  color: #ffffff;
}
.banner-top__products-count {
  opacity: 0.5;
  padding: 2px 6px 3px;
  border: 1px solid #ffffff;
  margin-left: 8px;
  color: #ffffff;
  border-radius: 3px;
}
</style>
