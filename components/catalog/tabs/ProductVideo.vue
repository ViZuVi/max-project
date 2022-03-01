<template>
  <div class="product-video">
    <div class="product-video__wrapper" v-for="video in product.video" :key="video.id">
      <iframe class="product-video__frame" :src="video.link" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductVideo",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.product-video {
  display: flex;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.product-video__wrapper {
  padding: 0 16px;
  width: 50%;
  @include adapt-mobile {
    width: 100%;
  }
}
.product-video__frame {
  height: 457px;
  width: 100%;
}
</style>
