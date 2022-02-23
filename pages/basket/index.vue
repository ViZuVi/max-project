<template>
  <div class="basket-page">
    <!-- TODO: layot with personal recomendations -->
    <!-- TODO: to componnent -->
    <div class="basket-page__header">
      <div class="basket-page__title-wrapper">
        <h1 class="basket-page__title">Корзина</h1>
        <nuxt-link class="basket-page__header-link" to="/catalog"
          >Вернуться в каталог</nuxt-link
        >
      </div>
      <div class="basket-page__header-actions">
        <button class="basket-page__header-btn">
          <AppIcon
            symbol="icon_download"
            className="basket-page__header-icon"
          />
          <span>Скачать файлом</span>
        </button>
        <button class="basket-page__header-btn">
          <AppIcon symbol="icon_print" className="basket-page__header-icon" />
          <span>Версия для печати</span>
        </button>
        <button class="basket-page__header-btn">
          <AppIcon symbol="icon_share" className="basket-page__header-icon" />
          <span>Поделиться корзиной</span>
        </button>
      </div>
    </div>
    <div class="basket-page__main">
      <div v-if="cart && cart.length">
        <BasketProducts />
        
        <div class="basket-page__checkout"></div>
      </div>
      <div class="basket-page__empty" v-else>
        <AppIcon symbol="icon_cart" className="basket-page__cart-icon" />
        <span class="basket-page__empty-title">Ваша корзина пуста</span>
        <div class="basket-page__empty-text-wrapper">
          <nuxt-link class="basket-page__empty-link" to="/"
            >Нажмите здесь</nuxt-link
          >
          <span class="basket-page__empty-text"
            >, чтобы продолжить покупки</span
          >
        </div>
      </div>
      <RecommendedProducts />
    </div>
  </div>
</template>

<script>
import RecommendedProducts from "~/components/cart/RecommendedProducts";
import BasketProducts from "~/components/cart/BasketProducts";
import AppIcon from "~/components/ui/AppIcon";

export default {
  components: {
    RecommendedProducts,
    BasketProducts,
    AppIcon,
  },
  layout: "cart",
  data() {
    return {
      cart: [
        {
          id: 1,
          image: require("~/assets/img/recommended-1.jpg"),
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.basket-page {
  width: $max-width;
  margin: 0 auto;
  padding: 42px 30px 0;
}
.basket-page__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.basket-page__title {
  color: #333333;
  font-weight: normal;
  font-size: 2.133em;
  line-height: 1.126em;
  margin-bottom: 17px;
}
.basket-page__header-link {
  color: #999999;
  font-size: 0.867em;
  line-height: 1.692em;
  &:hover {
    color: #365edc;
  }
}
.basket-page__header-actions {
  display: flex;
  align-items: center;
}
.basket-page__header-btn {
  display: flex;
  align-items: center;
  color: #555555;
  font-size: 0.734em;
  text-transform: uppercase;
  line-height: 1.181em;
  letter-spacing: 0.08em;
  margin-right: 32px;
  height: 16px;
}
.basket-page__header-icon {
  margin-right: 10px;
  color: #b8b8b8;
}
.basket-page__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 42px;
}
.basket-page__cart-icon {
  color: #cccccc;
}

.basket-page__empty-title {
  color: #333333;
  font-size: 1.6em;
  margin: 2.2rem 0 1.2rem;
}
.basket-page__empty-text-wrapper {
  font-size: 0.933em;
  color: #777;
  line-height: 1.714em;
}
.basket-page__empty-link {
  color: #365edc;
  &:hover {
    color: #333333;
  }
}
</style>