<template>
  <div class="product-card-price">
    <div class="product-card-price__price">{{ price }} ₽/шт</div>
    <div class="product-card-price__availability-wrapper">
      <AppAvailabilityBlock
        :availability="availability"
        :hasModal="true"
      />
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
import AppAvailabilityBlock from "~/components/ui/AppAvailabilityBlock";

export default {
  name: "AppProductPrice",
  components: {
    AppIcon,
    AppAvailabilityBlock,
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