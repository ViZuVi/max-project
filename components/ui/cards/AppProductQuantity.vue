<template>
  <div
    class="product-card-quantity"
    :class="{ 'product-card-quantity--small': small }"
  >
    <div class="product-card-quantity__btns">
      <button class="product-card-quantity__btn">
        <AppIcon symbol="icon_minus" className="product-card-quantity__btn-icon" />
      </button>
      <input
        class="product-card-quantity__input"
        type="text"
        :value="quantity"
        min="1"
        @change="$emit('change', $event.target.value)"
      />
      <button class="product-card-quantity__btn">
        <AppIcon symbol="icon_plus" className="product-card-quantity__btn-icon" />
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppProductQuantity",
  components: {
    AppIcon,
  },
  props: {
    quantity: {
      type: Number,
      required: true,
      default: () => 1,
    },
    small: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card-quantity {
  height: 48px;
}
.product-card-quantity__btns {
  display: flex;
  align-items: center;
  border: 1px solid #eaeaea;
  line-height: 25px;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
}
.product-card-quantity__btn {
  background-color: transparent;
  color: #979797;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-card-quantity__input {
  flex-grow: 1;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  line-height: 13px;
  color: #333333;
  height: 100%;
  width: 100px;
  &:focus {
    outline: none;
  }
}
.product-card-quantity__btn-icon {
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

