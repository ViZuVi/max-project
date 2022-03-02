<template>
  <div class="banner-top">
    <v-carousel
      height="631"
      show-arrows-on-hover
      hide-delimiter-background
      light
    >
      <template v-slot:prev="{ on, attrs }">
        <button
          class="app__carousel-btns app__carousel-btns--prev"
          v-bind="attrs"
          v-on="on"
        >
          <AppIcon symbol="icon_prev" class="app__carousel-icon" />
        </button>
      </template>
      <template v-slot:next="{ on, attrs }">
        <button
          class="app__carousel-btns app__carousel-btns--next"
          v-bind="attrs"
          v-on="on"
        >
          <AppIcon symbol="icon_next" class="app__carousel-icon" />
        </button>
      </template>

      <v-carousel-item
        v-for="item in carouselItems"
        :key="item.id"
        :src="item.image"
      >
        <v-sheet>
          <div class="banner-top__info">
            <span class="banner-top__title">{{ item.title }}</span>
            <div class="banner-top__description">{{ item.text }}</div>
            <AppButton
              :label="item.link_title"
              className="banner-top__btn"
              @click="$router.push(item.link)"
            />
          </div>
        </v-sheet>
        <!-- TODO: position absolute -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "BannerTop",
  components: {
    AppButton,
    AppIcon,
  },
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
    @include adapt-mobile {
      width: 100%;
      padding: 27px 20px;
      background-color: #ffffff;
    }
  }
}
.banner-top__title {
  display: block;
  font-size: 2.2666em;
  line-height: 1.15em;
  margin-bottom: 23px;
}
.banner-top__description {
  color: $text-black-3;
  line-height: 1.8em;
  margin-bottom: 29px;
}
.banner-top__btn {
  margin-left: 0;
  background-color: $text-link-hover;
  color: #ffffff;
}
</style>