<template>
  <section class="collections">
    <div class="collections__wrapper">
      <AppSectionTitle
        title="Коллекции"
        allName="Все коллекции"
        allLink="/collections"
      />
      <div class="collections__list">
        <CollectionCard
          v-for="collection in collections"
          :key="collection.id"
          :collection="collection"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import CollectionCard from "./CollectionCard";

export default {
  name: "CollectionsList",
  components: {
    AppSectionTitle,
    CollectionCard,
  },
  computed: {
    ...mapState("products", ["collections"]),
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
