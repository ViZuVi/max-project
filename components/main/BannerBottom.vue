<template>
  <div class="banner-bottom">
    <div class="banner-bottom__wrapper" v-for="item in items" :key="item.id">
      <nuxt-link
        to="#"
        class="banner-bottom__link"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
      </nuxt-link>
      <nuxt-link to="#" class="banner-bottom__text-wrapper">
        <span class="banner-bottom__section font-upper">{{ item.code }}</span>
        <span class="banner-bottom__title font-large">{{ item.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerBottom",
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    const blog = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/blog"
    );
    this.items = blog.item;
  },
};
</script>

<style lang="scss" scoped>
.banner-bottom {
  display: flex;
  width: 100%;
  min-height: 275px;
  flex-wrap: wrap;
}
.banner-bottom__wrapper {
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  width: 25%;
  @include adapt-mobile {
    width: 50%;
  }

  &:last-child {
    width: 50%;
    @include adapt-mobile {
      width: 100%;
    }
  }

  &:hover {
    .banner-bottom__link {
      transform: scale(1.05);
      &::before {
        opacity: 1;
      }
    }
  }
}
.banner-bottom__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.6s ease;
  position: relative;
  background-size: cover;
  &::before {
    content: "";
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    opacity: 0;
  }
}
.banner-bottom__text-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 33px 40px 34px;
  color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    color: #ffffff;
  }
}
.banner-bottom__section {
  opacity: 0.7;
  margin-bottom: 11px;
}
</style>