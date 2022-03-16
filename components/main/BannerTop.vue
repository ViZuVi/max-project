<template>
  <div class="banner-top">
    <v-carousel
      height="631"
      show-arrows-on-hover
      hide-delimiter-background
      :light="true"
      :show-arrows="!!!$device.isMobileOrTablet"
      @change="changeCarouselItem"
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
      </v-carousel-item>
    </v-carousel>
    <div class="banner-top__info">
      <span class="banner-top__title">{{ activeItem.title }}</span>
      <div class="banner-top__description">{{ activeItem.text }}</div>
      <AppButton
        :label="activeItem.link_title"
        className="banner-top__btn"
        :transparent="false"
        @click="$router.push(activeItem.link)"
      />
    </div>
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
      activeItem: {},
      carouselItems: [],
    };
  },
  async fetch() {
    const res = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/index/carousel"
    );
    this.carouselItems = [
      ...res.items.map((el) => ({ ...el, id: 1 })),
      ...res.items.map((el) => ({ ...el, id: 2, title: "Test" })),
    ];
  },
  methods: {
    changeCarouselItem(i) {
      this.activeItem = this.carouselItems[i];
    },
  },
};
</script>

<style lang="scss">
.banner-top {
  position: relative;

  .v-btn__content {
    &::before {
      content: none;
    }
  }

  .v-btn {
    width: 12px;
    height: 12px;
    &::before {
      content: none;
    }

    &--active {
      .v-icon.mdi {
        background-color: $text-link-hover;
      }
    }
  }
  .v-icon.mdi {
    &::before,
    &::after {
      content: none;
    }
    opacity: 1;
    color: #ffffff;
    background-color: #ffffff;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}
.banner-top__info {
  max-width: 600px;
  position: absolute;
  top: 37%;
  left: 17%;
  @include adapt-mobile {
    position: static;
    padding: 27px 20px;
    text-align: center;
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

  @include adapt-mobile {
    margin-left: auto;
  }
}
</style>