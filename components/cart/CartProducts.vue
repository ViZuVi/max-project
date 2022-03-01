<template>
  <div class="cart-items">
    <div class="cart-items__header">
      <div class="cart-items__header-title">Товары в корзине</div>
      <button class="cart-items__header-clear-btn">
        <span>Очистить</span>
        <AppIcon symbol="icon_close" className="cart-items__clear-icon" />
      </button>
    </div>
    <div class="cart-items__list">
      <div
        class="cart-items__product"
        v-for="product in products"
        :key="product.id"
      >
        <div class="cart-items__product-img-wrapper">
          <img :src="product.image" :alt="product.title" />
          <button class="cart-items__preview-btn"></button>
        </div>
        <div class="cart-items__product-info">
          <div class="cart-items__tags">
            <span class="cart-items__tag cart-items__tag--discount"
              >-{{ product.discount }}%</span
            >
            <span
              class="cart-items__tag cart-items__tag--hit"
              v-if="product.hit"
              >Хит</span
            >
          </div>
          <nuxt-link class="cart-items__title" :to="`/catalog/${product.id}`">{{
            product.title
          }}</nuxt-link>
          <span class="cart-items__prop" v-if="product.discount">
            <span class="cart-items__prop-name">Скидка: </span>
            <span class="cart-items__prop-value">{{ product.discount }}</span>
          </span>
          <span class="cart-items__prop" v-if="product.discount">
            <span class="cart-items__prop-name">Тип цены: </span>
            <span class="cart-items__prop-value">{{ product.priceType }}</span>
          </span>
        </div>
        <div class="cart-items__quantity">
          <div class="cart-items__quantity-btns">
            <button class="cart-items__decrease-btn">
              <AppIcon
                symbol="icon_minus"
                className="cart-items__btn-icon"
              />
            </button>
            <input
              class="cart-items__quantity-input"
              type="text"
              :value="product.quantity"
            />
            <!-- TODO: add actions -->
            <button class="cart-items__increase-btn">
              <AppIcon
                symbol="icon_plus"
                className="cart-items__btn-icon"
              />
            </button>
          </div>
          <span class="cart-items__quantity-price">
            {{ product.userPrice.toLocaleString() }} ₽/шт
          </span>
        </div>
        <div class="cart-items__total-wrapper">
          <span class="cart-items__total-user-price">{{
            (product.userPrice * product.quantity).toLocaleString()
          }}</span>
          <span class="cart-items__total-price">{{
            product.price * product.quantity
          }}</span>
          <span class="cart-items__total-saving" v-if="product.saving"
            >Экономия
            {{
              ((product.price - product.userPrice) * product.quantity).toFixed(
                2
              ).toLocaleString()
            }}
            ₽</span
          >
        </div>
        <AppIcon
          symbol="icon_close"
          className="cart-items__clear-icon cart-items__clear-icon--single"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "CartProducts",
  components: {
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
          userPrice: 35820.28,
          price: 36000,
          category: "electronics",
          subCategory: "phones",
          image: require("~/assets/img/best-product-phone-1.jpg"),
          saving: "127",
        },
      ],
    };
  },
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

  &--single {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 30px;
    right: -11px;
    @include adapt-mobile {
      top: 0;
      right: 8px;
    }
  }
}
.cart-items__product {
  display: flex;
  justify-content: space-between;
  margin: 0 28px;
  padding: 29px 0 27px;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid #e2dfdf;
  }
  @include adapt-mobile {
    padding: 16px 16px 10px;
    margin: 0;
    flex-wrap: wrap;
  }
}
.cart-items__product-img-wrapper {
  max-width: 120px;
  max-height: 120px;
  padding-right: 15px;
}
.cart-items__product-info,
.cart-items__quantity,
.cart-items__price-wrapper {
  display: flex;
  flex-direction: column;
}
.cart-items__tags {
  margin-bottom: 7px;
  @include adapt-mobile {
    display: none;
  }
}
.cart-items__tag {
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
.cart-items__title {
  font-size: 1em;
  color: $text-black-3;
  margin-bottom: 5px;

  &:hover {
    color: $text-link-hover;
  }
}
.cart-items__prop {
  font-size: 13px;
  padding-top: 6px;
  color: $text-black-3;
}
.cart-items__prop-name {
  margin-right: 5px;
  color: #888;
}
.cart-items__quantity-btns {
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
.cart-items__decrease-btn,
.cart-items__increase-btn {
  // TODO: change to svg?
  background-color: transparent;
  width: 32px;
  color: #979797;
  &:hover {
    color: $text-link-hover;
  }
}
.cart-items__quantity-input {
  height: 30px;
  width: 40px;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  line-height: 13px;
  color: $text-black-3;
}
.cart-items__quantity-price {
  font-size: 13px;
  color: $text-black-9;
}
.cart-items__total-wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  @include adapt-mobile {
    margin-right: 0;
    line-height: 12px;
    padding: 2px 4px 2px;
    align-items: flex-end;
  }
}
.cart-items__total-user-price {
  color: $text-black-3;
  letter-spacing: -0.33px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}
.cart-items__total-price {
  color: $text-black-9;
  text-decoration: line-through;
  font-size: 15px;
  line-height: 12px;
}
.cart-items__total-saving {
  font-size: 11px;
  color: #333;
  padding: 2px 4px 2px;
  background: #fff8db;
  border: 1px solid #ffd83a;
  border-radius: 3px;
  white-space: nowrap;
  margin: 7px 0 0;
}
.cart-items__btn-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>