<template>
  <div class="banner-top">
    <v-carousel height="631" show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="require('~/assets/img/header-background.jpg')"
      >
        <!-- require('~/assets/img/header-background.jpg') -->
        <v-sheet>
          <div class="banner-top__info">
            <!-- TODO: category in api? -->
            <span class="banner-top__title">{{ item.title }}</span>
            <div class="banner-top__description">{{ item.text }}</div>
            <AppButton
              :label="item.link_title"
              className="app-button--transparent banner-top__btn"
              @click="$router.push(item.link)"
            />
          </div>
        </v-sheet>
        <!-- position absolute -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "BannerTop",
  components: {
    AppButton,
  },
  // TODO: fetchOnServer: false - find other decision
  fetchOnServer: false,
  data() {
    return {
      carouselItems: [],
    };
  },
  async fetch() {
    const res = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/index/carousel"
    );
    this.carouselItems = res.items;
  },
};
</script>

<style lang="scss" scoped>
.banner-top {
  .v-sheet {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
  }
}
</style>