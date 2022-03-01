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
      collections: [],
    }
  },
  async fetch() {
    const collections = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/catalog/index/collections"
    );
    this.collections = collections.item;
  },
};
</script>

<style lang="scss" scoped>
.collections {
  border-bottom: $border;
}
.collections__wrapper {
  @include section-size;
}
.collections__list {
  display: flex;
  @include adapt-mobile {
    width: 100%;
    overflow-y: auto;
  }
}
</style>
