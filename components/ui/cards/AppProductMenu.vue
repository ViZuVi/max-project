<template>
  <div class="app-product-menu">
    <AppButton btnSymbol="icon_heart" className="app-product-menu__btn" />
    <AppButton
      btnSymbol="icon_diagram"
      className="app-product-menu__btn"
    />
    <AppButton btnSymbol="icon_bag" className="app-product-menu__btn" />
    <v-dialog v-model="showCardModal" width="968">
      <template v-slot:activator="{ on, attrs }">
        <AppButton
          v-bind="attrs"
          v-on="on"
          btnSymbol="icon_eye"
          className="app-product-menu__btn"
        />
      </template>
      <AppProductsCard :product="product" />
    </v-dialog>
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";
import AppProductsCard from "~/components/ui/cards/AppProductsCard";

export default {
  name: "AppProductMenu",
  components: {
    AppButton,
    AppProductsCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      showCardModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-product-menu {
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity 0.3s ease;
}
.app-product-menu__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  margin-right: 4px;
  width: 32px;
  height: 32px;
  padding: 0;
  padding-top: 2px;
  padding-top: 6px;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: $text-link-hover;
  }
}
</style>