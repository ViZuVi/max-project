<template>
  <div class="cart-page">
    <!-- TODO: to componnent -->
    <div class="cart-page__header">
      <div class="cart-page__title-wrapper">
        <h1 class="cart-page__title">Корзина</h1>
        <nuxt-link class="cart-page__header-link" to="/catalog"
          >Вернуться в каталог</nuxt-link
        >
      </div>
      <div class="cart-page__header-actions">
        <button class="cart-page__header-btn">
          <AppIcon symbol="icon_download" className="cart-page__header-icon" />
          <span>Скачать файлом</span>
        </button>
        <button class="cart-page__header-btn">
          <AppIcon symbol="icon_print" className="cart-page__header-icon" />
          <span>Версия для печати</span>
        </button>
        <button class="cart-page__header-btn">
          <AppIcon
            symbol="icon_share_cart"
            className="cart-page__header-icon"
          />
          <span>Поделиться корзиной</span>
        </button>
      </div>
    </div>
    <div>
      <div class="cart-page__main" v-if="products.length">
        <CartProducts />
        <CartTotal />
      </div>
      <div class="cart-page__empty" v-else>
        <AppIcon symbol="icon_cart" className="cart-page__cart-icon" />
        <span class="cart-page__empty-title">Ваша корзина пуста</span>
        <div class="cart-page__empty-text-wrapper">
          <nuxt-link class="cart-page__empty-link" to="/"
            >Нажмите здесь</nuxt-link
          >
          <span class="cart-page__empty-text">, чтобы продолжить покупки</span>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecommendedProducts from "~/components/cart/RecommendedProducts";
import CartProducts from "~/components/cart/CartProducts";
import CartTotal from "~/components/cart/CartTotal";
import AppIcon from "~/components/ui/AppIcon";

export default {
  components: {
    RecommendedProducts,
    CartProducts,
    CartTotal,
    AppIcon,
  },
  computed: {
    ...mapState("cart", ["products"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-page {
  width: $max-width;
  margin: 0 auto;
  padding: 42px 30px 0;
  @include adapt-mobile {
    width: 100%;
    padding: 0;
  }
}
.cart-page__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @include adapt-mobile {
    padding: 18px 16px 0;
  }
}
.cart-page__title {
  color: $text-black-3;
  font-weight: normal;
  font-size: 2.133em;
  line-height: 1.126em;
  margin-bottom: 17px;
}
.cart-page__header-link {
  color: $text-black-9;
  font-size: 0.867em;
  line-height: 1.692em;
  &:hover {
    color: $text-link-hover;
  }
}
.cart-page__header-actions {
  display: flex;
  align-items: center;
  @include adapt-mobile {
    display: none;
  }
}
.cart-page__header-btn {
  display: flex;
  align-items: center;
  color: $text-black-5;
  font-size: 0.734em;
  text-transform: uppercase;
  line-height: 1.181em;
  letter-spacing: 0.08em;
  margin-right: 32px;
  height: 16px;
}
.cart-page__header-icon {
  margin-right: 10px;
  color: #b8b8b8;
}
.cart-page__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 42px;
}
.cart-page__cart-icon {
  color: #cccccc;
}

.cart-page__empty-title {
  color: $text-black-3;
  font-size: 1.6em;
  margin: 2.2rem 0 1.2rem;
}
.cart-page__empty-text-wrapper {
  font-size: 0.933em;
  color: #777;
  line-height: 1.714em;
}
.cart-page__empty-link {
  color: $text-link-hover;
  &:hover {
    color: $text-black-3;
  }
}
.cart-page__main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 53px;
  @include adapt-mobile {
    flex-direction: column;
  }
}
</style>