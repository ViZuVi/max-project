<template>
  <section class="day-offer">
    <div class="day-offer__wrapper">
      <AppSectionTitle
        title="Товар дня"
        allName="Весь каталог"
        allLink="/catalog"
        iconSymbol="icon_hot"
      />
      <v-carousel>
        <!-- TODO: items from mocks; add cards and card components -->
        <v-carousel-item v-for="product in dayProducts" :key="product.id">
          <v-sheet> {{product.title}}</v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import AppSectionTitle from "~/components/ui/AppSectionTitle";

export default {
  name: "DayOffer",
  components: {
    AppSectionTitle,
  },
  computed: {
    ...mapState("products", ["dayProducts"]),
  }
};
</script>

<style lang="scss" scoped>
.day-offer {
  border-bottom: 1px solid #ececec;
}
.day-offer__wrapper {
  padding: 60px 30px 70px;
  max-width: $max-width;
  margin: 0 auto;
}
</style>
