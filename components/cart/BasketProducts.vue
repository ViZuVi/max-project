<template>
  <div class="basket-items">
    <div class="basket-items__header">
      <div class="basket-items__header-title">Товары в корзине</div>
      <!-- <AppButton label="Очистить" /> -->
      <button class="basket-items__header-clear-btn">
        <span>Очистить</span>
        <AppIcon
          symbol="icon_close"
          className="basket-items__header-clear-icon"
        />
      </button>
    </div>
    <div class="basket-items__list">
      <div
        class="basket-items__product"
        v-for="product in products"
        :key="product.id"
      >
        <div class="basket-items__product-img-wrapper">
          <img :src="product.image" :alt="product.title" />
          <button class="basket-items__preview-btn"></button>
        </div>
        <div class="basket-items__product-info">
          <div class="basket-items__tags">
            <span class="basket-items__tag basket-items__tag--discount"
              >-{{ product.discount }}%</span
            >
            <span
              class="basket-items__tag basket-items__tag--hit"
              v-if="product.hit"
              >Хит</span
            >
          </div>
          <nuxt-link
            class="basket-items__title"
            :to="`/catalog/${product.category}/${product.subCategory}/${product.id}`"
            >{{ product.title }}</nuxt-link
          >
          <span class="basket-items__prop" v-if="product.discount">
            <span class="basket-items__prop-name">Скидка: </span>
            <span class="basket-items__prop-value">{{ product.discount }}</span>
          </span>
          <span class="basket-items__prop" v-if="product.discount">
            <span class="basket-items__prop-name">Тип цены: </span>
            <span class="basket-items__prop-value">{{
              product.priceType
            }}</span>
          </span>
        </div>
        <div class="basket-items__quantity">
          <div class="basket-items__quantity-btns">
            <button class="basket-items__decrease-btn">-</button>
            <input
              class="basket-items__quantity-input"
              type="text"
              :value="product.quantity"
            />
            <button class="basket-items__increase-btn">+</button>
          </div>
          <span class="basket-items__quantity-price">
            {{ product.userPrice }} ₽/шт
          </span>
        </div>
        <div class="basket-items__price-wrapper">
          <span>{{ product.userPrice * product.quantity }}</span>
          <span>{{ product.price * product.quantity }}</span>
          <span
            >Экономия
            {{ (product.price - product.userPrice) * product.quantity }} ₽</span
          >
        </div>
        <button>x</button>
      </div>
    </div>
  </div>
</template>

<script>
// import AppButton from "~/components/ui/AppButton";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "BasketProducts",
  components: {
    // AppBtton,
    AppIcon,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Смартфон SY 15",
          priceType: "Цена в Москве",
          hit: true,
          discount: 10,
          quantity: 1,
          // TODO: format price
          userPrice: 35820.28,
          price: 36000,
          category: "electronics",
          subCategory: "phones",
          image: require("~/assets/img/best-product-phone-1.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.basket-items {
  border: 1px solid #e2dfdf;
  margin-bottom: 68px;
}
.basket-items__header {
  border-bottom: 1px solid #e2dfdf;
  padding: 13px 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 25px;
}
.basket-items__header-title {
  box-shadow: 0px 2px 0px #365edc;
  font-size: 13px;
  cursor: pointer;
}
.basket-items__header-clear-btn {
  font-size: 10px;
  text-transform: uppercase;
  color: #999;
  letter-spacing: 0.8px;

  &:hover {
    color: #365edc;

    .basket-items__header-clear-icon {
      color: #365edc;
    }
  }
}
.basket-items__header-clear-icon {
  margin-left: 8px;
  color: #b5b5b5;
}
.basket-items__product {
  display: flex;
  justify-content: space-between;
  margin: 0 28px;
  padding: 29px 0 27px;
  &:not(:last-child) {
    border-bottom: 1px solid #e2dfdf;
  }
}
.basket-items__product-img-wrapper {
  max-width: 120px;
  max-height: 120px;
  padding-right: 15px;
}
.basket-items__product-info,
.basket-items__quantity,
.basket-items__price-wrapper {
  display: flex;
  flex-direction: column;
}
.basket-items__tags {
  margin-bottom: 7px;
}
// TODO: tags to oui
.basket-items__tag {
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  padding: 6px 7px 6px;
  border-radius: 2px;
  color: #ffffff;

  &:not(:last-child) {
    margin-right: 4px;
  }

  &--discount {
    background-color: #f31d37;
  }
  &--hit {
    background-color: #2992d9;
  }
}
.basket-items__title {
  font-size: 1em;
  color: #333333;
  margin-bottom: 5px;

  &:hover {
    color: #365edc;
  }
}
.basket-items__prop {
  font-size: 13px;
  padding-top: 6px;
  color: #333333;
}
.basket-items__prop-name {
  margin-right: 5px;
  color: #888;
}
.basket-items__quantity-btns {
  display: flex;
  align-items: center;
  max-width: 102px;
  min-width: 100px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  line-height: 25px;
  background-color: #fafafa;
  margin-bottom: 5px;
}
.basket-items__decrease-btn,
.basket-items__increase-btn {
  // TODO: change to svg?
  background-color: transparent;
  width: 32px;
  color: #979797;
}
.basket-items__quantity-input {
  height: 30px;
  width: 40px;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  line-height: 13px;
  color: #333333;
}
.basket-items__quantity-price {
  font-size: 13px;
  color: #999999;
}
</style>