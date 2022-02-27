<template>
  <section class="adds-list">
    <div class="adds-list__wrapper">
      <AdsListCard v-for="card in cards" :card="card" :key="card.id" />
    </div>
  </section>
</template>

<script>
import AdsListCard from "./AdsListCard";

export default {
  name: "AdsList",
  components: {
    AdsListCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: require("~/assets/img/adclothes-woman.jpg"),
          title: "Женская одежда",
          category: "Удобство и комфорт",
          link: "#",
        },
        {
          id: 2,
          img: require("~/assets/img/adphones.jpg"),
          title: "Смартфоны",
          category: "Связь и технологии",
          link: "#",
        },
        {
          id: 3,
          img: require("~/assets/img/adhome-accessories.jpg"),
          title: "Аксессуары для дома",
          category: "Декор и уют",
          link: "#",
        },
        {
          id: 4,
          img: require("~/assets/img/adtoys.jpg"),
          title: "Мягкие игрушки",
          category: "Радость и веселье",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.adds-list {
  border-bottom: 1px solid #ececec;
  @include adapt-mobile {
    width: 100%;
    overflow-y: auto;
  }
}
.adds-list__wrapper {
  padding: 60px 30px 27px;
  width: $max-width;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>