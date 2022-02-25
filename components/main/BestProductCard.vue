<template>
  <div
    class="best-product-card"
    :class="index === 0 ? 'best-product-card--prime' : ''"
  >
    <div class="best-product-card__wrapper">
      <nuxt-link :to="`/catalog/${product.id}`" class="best-product-card__link">
        <img :src="product.images[0]" alt="" />
      </nuxt-link>
      <div class="best-product-card__info">
        <div class="best-product-card__rating">{{ product.rating }}</div>
        <p>{{ product.title }}</p>
        <span>{{ product.count }}</span>
        <span>{{ product.count }}</span>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <div class="best-product-card__menu">
      <AppButton btnSymbol="icon_heart" @click="addToFavourite" />
      <AppButton btnSymbol="icon_diagram" @click="addToCompare" />
      <AppButton btnSymbol="icon_bag" @click="fastBuy" />
      <!-- TODO: delete test class -->
      <v-dialog class="test" v-model="dialog" width="968">
        <template v-slot:activator="{ on, attrs }">
          <!-- TODO: v-bind -->
          <AppButton v-bind="attrs" v-on="on" btnSymbol="icon_eye" />
        </template>
        <AppProductsCard :product="product" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";
import AppProductsCard from "~/components/ui/cards/AppProductsCard";

export default {
  title: "BestProductCard",
  components: {
    AppIcon,
    AppButton,
    AppProductsCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    addToFavourite(e) {
      console.log(e);
    },
    addToCompare() {},
    fastBuy() {},
  },
};
</script>

<style lang="scss" scoped>
.best-product-card {
  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px #ececec;
  margin-right: -1px;
  padding: 25px;
  transition: box-shadow ease-out 0.4s, border ease-out 0.4s;
  &--prime {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
.test {
  max-width: 960px;
  width: 88%;
  min-height: 600px;
}
</style>