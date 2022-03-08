<template>
  <div class="product-suggestions">
    <v-tabs v-model="tab" show-arrows>
      <v-tab
        v-for="item in tabs"
        :key="item.value"
        @change="activeTabComponent = item.component"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabs" :key="item.cardsType">
        <div class="product-suggestions__list">
          <AppProductCard
            class="product-suggestions__item"
            v-for="product in products[item.cardsType]"
            :key="product.id"
            :product="product"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import AppProductCard from "~/components/ui/cards/AppProductCard";

export default {
  name: "ProductsSuggestions",
  components: {
    AppProductCard
  },
  props: {
    products: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      tab: "",
      tabs: [
        { title: "Вам также может понравиться", cardsType: "mightLike" },
        { title: "С этим товаром покупают", cardsType: "buyWith" },
      ],
    };
  },
};
</script>

<style lang="scss">
.product-suggestions {
  .v-tabs-bar {
    margin-bottom: 39px;
  }
  .v-tab {
    margin: 3px;
    padding: 0;
    color: $text-black-6;
    font-size: 15px;
    text-transform: initial;
    letter-spacing: initial;
    &--active {
      background-color: #ffffff;
      pointer-events: none;
      color: $text-black-3;
    }
    &:hover {
      background-color: #ffffff;
      color: $text-black-6;
    }
    &::before {
      content: initial;
    }
  }
  .v-slide-group__prev--disabled,
  .v-slide-group__next--disabled {
    display: none !important;
  }
}
.product-suggestions__list {
  display: flex;
}
.product-suggestions__item {
  flex-basis: 25%;

  @include adapt-mobile {
    min-width: 50%;
  }
}
</style>
