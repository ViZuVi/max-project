<template>
  <section class="stories">
    <div class="stories__wrapper">
      <button>Prev</button>
      <div v-for="(item, i) in items" :key="i">
        <span
          class="stories__img-wrapper"
          :style="{ backgroundImage: `url(${item.img})` }"
        ></span>
        <span class="stories__title">{{ item.title }}</span>
      </div>
      <button>Next</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "#max_challenge",
          img: require("~/assets/img/stories-1.jpg"),
        },
        {
          id: 1,
          title: "Оплата",
          img: require("~/assets/img/stories-1.jpg"),
        },
        {
          id: 1,
          title: "Оплата",
          img: require("~/assets/img/stories-1.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.stories {
  border-bottom: 1px solid #ececec;
}
.stories__wrapper {
  @include section-size;
}
.stories__list {
  display: flex;
  flex-wrap: wrap;
}
</style>