<template>
  <div class="cart-product">
    <div class="cart-product__img-wrapper">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="cart-product__info">
      <div class="cart-product__tags">
        <span class="cart-product__tag cart-product__tag--discount"
          >-{{ product.discount }}%</span
        >
        <span
          class="cart-product__tag cart-product__tag--hit"
          v-if="product.hit"
          >Хит</span
        >
      </div>
      <nuxt-link class="cart-product__title" :to="`/catalog/electronics/${product.id}`">{{
        product.title
      }}</nuxt-link>
      <span class="cart-product__prop" v-if="product.discount">
        <span class="cart-product__prop-name">Скидка: </span>
        <span class="cart-product__prop-value">{{ product.discount }}</span>
      </span>
      <span class="cart-product__prop" v-if="product.discount">
        <span class="cart-product__prop-name">Тип цены: </span>
        <span class="cart-product__prop-value">{{ product.priceType }}</span>
      </span>
    </div>
    <div class="cart-product__quantity">
      <div class="cart-product__quantity-btns">
        <button
          class="cart-product__decrease-btn"
          @click="changeQuantity($event, 'decrease')"
        >
          <AppIcon symbol="icon_minus" className="cart-product__btn-icon" />
        </button>
        <input
          class="cart-product__quantity-input"
          type="text"
          :value="product.quantity"
          v-filter="'[1-9\\b]+'"
          @input="changeQuantity($event, 'input')"
        />
        <button
          class="cart-product__increase-btn"
          @click="changeQuantity($event, 'increase')"
        >
          <AppIcon symbol="icon_plus" className="cart-product__btn-icon" />
        </button>
      </div>
      <span class="cart-product__quantity-price">
        {{ product.userPrice }} ₽/шт
      </span>
    </div>
    <div class="cart-product__total-wrapper">
      <span class="cart-product__total-user-price">{{
        product.userPrice * product.quantity
      }}</span>
      <span class="cart-product__total-price">{{
        product.price * product.quantity
      }}</span>
      <span class="cart-product__total-saving" v-if="product.saving"
        >Экономия
        {{
          ((product.price - product.userPrice) * product.quantity).toFixed(2)
        }}
        ₽</span
      >
    </div>
    <button class="cart-product__clear-item-btn" @click="deleteProduct(product.id)">
      <AppIcon symbol="icon_close" className="cart-product__clear-icon" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppIcon from "~/components/ui/AppIcon";
export default {
  name: "CartProduct",
  components: {
    AppIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    ...mapActions("cart", ["changeProductQuantity", "deleteProduct"]),
    changeQuantity(e, action) {
      const payload = {
        value: this.product.quantity,
        id: this.product.id,
      };
      if (action === "input") {
        payload.value = Number(e.target.value);
      }
      if (action === "increase") {
        payload.value++;
      }
      if (action === "decrease") {
        payload.value > 1 ? payload.value-- : payload.value;
      }
      this.changeProductQuantity(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
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
.cart-product__img-wrapper {
  max-width: 120px;
  max-height: 120px;
  padding-right: 15px;
}
.cart-product__info,
.cart-product__quantity,
.cart-product__price-wrapper {
  display: flex;
  flex-direction: column;
}
.cart-product__tags {
  margin-bottom: 7px;
  @include adapt-mobile {
    display: none;
  }
}
.cart-product__tag {
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
.cart-product__title {
  font-size: 1em;
  color: $text-black-3;
  margin-bottom: 5px;

  &:hover {
    color: $text-link-hover;
  }
}
.cart-product__prop {
  font-size: 13px;
  padding-top: 6px;
  color: $text-black-3;
}
.cart-product__prop-name {
  margin-right: 5px;
  color: #888;
}
.cart-product__quantity-btns {
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
.cart-product__decrease-btn,
.cart-product__increase-btn {
  background-color: transparent;
  width: 32px;
  color: #979797;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:hover {
    color: $text-link-hover;
  }
}
.cart-product__quantity-input {
  height: 30px;
  width: 40px;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  line-height: 13px;
  color: $text-black-3;
  &:focus {
    outline: none;
  }
}
.cart-product__quantity-price {
  font-size: 13px;
  color: $text-black-9;
}
.cart-product__total-wrapper {
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
.cart-product__total-user-price {
  color: $text-black-3;
  letter-spacing: -0.33px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}
.cart-product__total-price {
  color: $text-black-9;
  text-decoration: line-through;
  font-size: 15px;
  line-height: 12px;
}
.cart-product__total-saving {
  font-size: 11px;
  color: #333;
  padding: 2px 4px 2px;
  background: #fff8db;
  border: 1px solid #ffd83a;
  border-radius: 3px;
  white-space: nowrap;
  margin: 7px 0 0;
}
.cart-product__btn-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-product__clear-icon {
  margin-left: 8px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}
.cart-product__clear-item-btn {
  position: absolute;
  color: #b5b5b5;
  top: 30px;
  right: -11px;
  @include adapt-mobile {
    top: 0;
    right: 8px;
  }
  &:hover {
    color: $text-link-hover;
  }
}
</style>
