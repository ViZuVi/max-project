<template>
  <section class="collections">
    <div class="collections__wrapper">
      <AppSectionTitle
        title="Коллекции"
        allName="Все коллекции"
        allLink="/collections"
      />
      <div class="collections__list">
        <CollectionCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import CollectionCard from "./CollectionCard";

export default {
  name: "CollectionsList",
  components: {
    AppSectionTitle,
    CollectionCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Топ-10 бестселлеров электроники",
          img: require("~/assets/img/collection-1.jpg"),
        },
        {
          id: 2,
          name: "Топ-10 бестселлеров электроники",
          img: require("~/assets/img/collection-2.jpg"),
        },
        {
          id: 3,
          name: "Топ-10 бестселлеров электроники",
          img: require("~/assets/img/collection-2.jpg"),
        },
        {
          id: 4,
          name: "Топ-10 бестселлеров электроники",
          img: require("~/assets/img/collection-2.jpg"),
        },
        {
          id: 5,
          name: "Топ-10 бестселлеров электроники",
          img: require("~/assets/img/collection-2.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.collections {
  border-bottom: 1px solid #ececec;
}
.collections__wrapper {
  @include section-size;
}
.collections__list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}
</style>
