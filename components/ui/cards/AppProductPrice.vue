<template>
  <div class="product-card-price">
    <div class="product-card-price__price">
      {{ price.toLocaleString() }} ₽/шт
    </div>
    <div class="product-card-price__availability-wrapper">
      <!-- TODO: availability modal? -->
      <span class="product-card-price__availability">{{ availability }}</span>
      <span class="product-card-price__question" v-if="price">
        <AppIcon
          symbol="icon_wallet"
          className="product-card-price__wallet-icon"
        />
        <button class="product-card-price__question-text">
          Нашли дешевле?
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppProductPrice",
  components: {
    AppIcon,
  },
  props: {
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card-price__price {
  font-size: 1.733em;
  line-height: 1.454em;
  font-weight: bold;
  margin-bottom: 10px;
  color: $text-black-3;
}
.product-card-price__availability-wrapper {
  display: flex;
  margin-bottom: 20px;
}
.product-card-price__availability {
  font-size: 0.8em;
  line-height: 15px;
  margin-right: 24px;
  margin-left: 15px;
  color: #5fa800;
  border-bottom: 1px dotted #5fa800;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #5fa800;
  }
}
.product-card-price__question {
  font-size: 0.8em;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: $text-black-6;
}
.product-card-price__question-text {
  border-bottom: 1px dotted;
}
.product-card-price__wallet-icon {
  margin-right: 7px;
  color: $text-black-9;
}
</style>