<template>
  <section class="brands">
    <div class="brands__wrapper">
      <div class="brand" v-for="brand in brands" :key="brand.id">
        <nuxt-link class="brand__link" :to="`brands/${brand.id}`">
          <img class="brand__img" :src="brand.image" :alt="brand.title" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Brands",
  data() {
    return {
      brands: [],
    };
  },
  async fetch() {
    const brands = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/vendors"
    );
    this.brands = brands.item;
  },
};
</script>
<style lang="scss" scoped>
.brands {
  border-bottom: 1px solid #ececec;
  background-color: #f8f8f8;
}
.brands__wrapper {
  @include section-size;
  padding-top: 79px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
}
.brand {
  padding: 0 26px;
  width: 230px;

  @include adapt-mobile {
    width: 50%;
  }
}
.brand__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  opacity: 0.5;
  filter: grayscale(1);
  transition: all ease-out 0.2s;

  &:hover {
    opacity: 1;
    filter: none;
  }
}
.brand__img {
  max-width: 120px;
  max-height: 60px;
}
</style>