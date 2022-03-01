<template>
  <section class="banners-middle">
    <div class="banners-middle__wrapper">
      <div
        class="banners-middle__item"
        v-for="card in cards"
        :card="card"
        :key="card.id"
      >
        <div class="banners-middle__item-info">
          <span class="banners-middle__item-category">{{ card.category }}</span>
          <nuxt-link
            :to="`catalog/${card.id}`"
            class="banners-middle__item-title"
            >{{ card.title }}</nuxt-link
          >
          <span class="banners-middle__item-description">{{
            card.description
          }}</span>
        </div>
        <nuxt-link
          :to="`catalog/${card.id}`"
          class="banners-middle__item-img-link"
          :style="{ backgroundImage: `url(${card.img})` }"
        ></nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannersMiddle",
  data() {
    return {
      cards: [
        {
          id: 1,
          category: "Коллекция 2019",
          title: "Стильный мужской бомбер",
          description:
            "Подбирайте удобный гардероб для комфортной жизни в городе",
          img: require("~/assets/img/banner-jacket.png"),
        },
        {
          id: 2,
          category: "Коллекция 2019",
          title: "Стильный мужской бомбер",
          description:
            "Подбирайте удобный гардероб для комфортной жизни в городе",
          img: require("~/assets/img/banner-jacket.png"),
        },
        {
          id: 3,
          category: "Коллекция 2019",
          title: "Стильный мужской бомбер",
          description:
            "Подбирайте удобный гардероб для комфортной жизни в городе",
          img: require("~/assets/img/banner-jacket.png"),
        },
        {
          id: 4,
          category: "Коллекция 2019",
          title: "Стильный мужской бомбер",
          description:
            "Подбирайте удобный гардероб для комфортной жизни в городе",
          img: require("~/assets/img/banner-jacket.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.banners-middle {
  border-bottom: $border;
}
.banners-middle__wrapper {
  @include section-size;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
}
.banners-middle__item {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  min-height: 360px;
  &:hover {
    .banners-middle__item-title {
      color: #356edc;
    }
  }
}
.banners-middle__item-info {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  padding: 50px 10px 54px 50px;
}
.banners-middle__item-category {
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: $text-black-5;
  margin-bottom: 12px;
}
.banners-middle__item-title {
  font-size: 1.6em;
  line-height: 1.25em;
  color: $text-black-3;
  margin-bottom: 16px;
}
.banners-middle__item-description {
  font-size: 0.867em;
  line-height: 1.692em;
  color: $text-black-5;
}
.banners-middle__item-img-link {
  transition: opacity 0.3s;
  flex-basis: 50%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>