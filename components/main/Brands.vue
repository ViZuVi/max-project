<template>
  <section class="brands">
    <div class="brands__wrapper">
      <div class="brand" v-for="brand in brands" :key="brand.id">
        <nuxt-link class="brand__link" :to="`brands/${brand.id}`">
          <img class="brand__img" :src="brand.src" alt="" />
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
      brands: [
        { id: 1, src: require("~/assets/img/brands-1.png") },
        { id: 2, src: require("~/assets/img/brands-1.png") },
        { id: 3, src: require("~/assets/img/brands-1.png") },
        { id: 4, src: require("~/assets/img/brands-1.png") },
        { id: 5, src: require("~/assets/img/brands-1.png") },
        { id: 6, src: require("~/assets/img/brands-1.png") },
        { id: 7, src: require("~/assets/img/brands-1.png") },
        { id: 8, src: require("~/assets/img/brands-1.png") },
        { id: 9, src: require("~/assets/img/brands-1.png") },
        { id: 10, src: require("~/assets/img/brands-1.png") },
        { id: 11, src: require("~/assets/img/brands-1.png") },
        { id: 12, src: require("~/assets/img/brands-1.png") },
      ],
    };
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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 32px;
}
.brand__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 90px;
  opacity: 0.5;
  filter: grayscale(1);
  transition: all ease-out .2s;

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