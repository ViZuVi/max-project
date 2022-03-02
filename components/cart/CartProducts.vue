<template>
  <div class="cart-items">
    <div class="cart-items__header">
      <div class="cart-items__header-title">Товары в корзине</div>
      <button class="cart-items__header-clear-btn" @click="clearCart">
        <span>Очистить</span>
        <AppIcon symbol="icon_close" className="cart-items__clear-icon" />
      </button>
    </div>
    <div class="cart-items__list">
      <CartProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppIcon from "~/components/ui/AppIcon";
import CartProduct from "./CartProduct";

export default {
  name: "CartProducts",
  components: {
    CartProduct,
    AppIcon,
  },
  computed: {
    ...mapState("cart", ["products"]),
  },
  methods: {
    ...mapActions("cart", ["clearCart"])
  }
};
</script>

<style lang="scss" scoped>
.cart-items {
  border: 1px solid #e2dfdf;
  margin-bottom: 15px;
  flex-grow: 1;
  @include adapt-mobile {
    width: 100%;
  }
}
.cart-items__header {
  border-bottom: 1px solid #e2dfdf;
  padding: 13px 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 25px;
  @include adapt-mobile {
    padding: 11px 16px 12px;
  }
}
.cart-items__header-title {
  box-shadow: 0px 2px 0px $text-link-hover;
  font-size: 13px;
  cursor: pointer;
}
.cart-items__header-clear-btn {
  font-size: 10px;
  text-transform: uppercase;
  color: #999;
  letter-spacing: 0.8px;

  &:hover {
    color: $text-link-hover;

    .cart-items__clear-icon {
      color: $text-link-hover;
    }
  }
}
.cart-items__clear-icon {
  margin-left: 8px;
  color: #b5b5b5;
}
</style>