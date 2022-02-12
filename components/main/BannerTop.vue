<template>
  <div class="banner-top">
    <v-carousel height="631" show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-sheet> MY CONTENT</v-sheet>
        <!-- position absolute -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerTop",
  data() {
    return {
      items: [
        { src: require("~/assets/img/header-background.jpg") },
        { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
      ],
    };
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