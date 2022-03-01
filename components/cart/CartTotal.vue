<template>
  <div class="cart-total">
    <div class="cart-total__price-wrapper">
      <div class="cart-total__title">Итого:</div>
      <div class="cart-total__price">{{ total.toLocaleString() }} ₽</div>
    </div>
    <div class="cart-total__saving-wrapper">
      <span class="cart-total__saving-text">Экономия</span>
      <span class="cart-total__saving">{{ saving.toLocaleString() }} ₽</span>
    </div>
    <div class="cart-total__input-wrapper">
      <input
        placeholder="Есть промокод?"
        class="cart-total__input"
        type="text"
        name=""
        id=""
      />
      <AppIcon
        symbol="icon_next_arrow"
        className="cart-total__input-arrow-icon"
      />
    </div>
    <div class="cart-total__btns-wrapper">
      <AppButton label="Купить в 1 клик" className="app-button--transparent" />
      <AppButton
        label="Перейти к оформлению"
        className="cart-total__checkout-btn"
        @click="$router.push('/order')"
      />
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "CartTotal",
  components: {
    AppIcon,
    AppButton,
  },
  data() {
    return {
      total: 89709,
      saving: 1000,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-total {
  margin-left: 32px;
  padding: 24px 29px;
  position: sticky;
  top: 0;
  margin-bottom: 15px;
  border: 1px solid #e2dfdf;
  border-radius: 3px;

  @include adapt-mobile {
    width: 100%;
    margin-left: 0;
    padding-left: 16px;
    padding-right: 16px;
  }

  .app-button {
    width: 100%;
    padding: 16px 26px;

    &:not(:last-child) {
      margin-bottom: 9px;
    }
  }
  .cart-total__checkout-btn {
    background-color: $text-link-hover;
    color: #ffffff;
  }
}
.cart-total__price-wrapper {
  color: $text-black-3;
  font-size: 1.2em;
  line-height: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.cart-total__saving-wrapper {
  display: flex;
  justify-content: space-between;
  line-height: 25px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    border-bottom: 1px #e2dfdf dotted;
    z-index: -1;
  }
}
.cart-total__saving-text,
.cart-total__saving {
  font-size: 0.867em;
  line-height: 1.692em;
  padding-right: 10px;
  background-color: #ffffff;
  z-index: 1;
}
.cart-total__saving-text {
  color: $text-black-5;
  padding-right: 10px;
}
.cart-total__saving {
  color: #27ae60;
  padding-left: 10px;
}
.cart-total__input-wrapper {
  position: relative;
  margin-top: 22px;
  margin-bottom: 19px;
  width: 100%;
}
.cart-total__input {
  line-height: 25px;
  padding: 9px 35px 9px 12px;
  width: 100%;
  border: $border;
  border-radius: 3px;
  background-color: #fafafa;
  &:focus {
    background-color: #ffffff;
    outline: none;
  }
}
.cart-total__input-arrow-icon {
  position: absolute;
  top: 9px;
  right: 12px;
}
</style>