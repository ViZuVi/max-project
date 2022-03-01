<template>
  <div class="info-tabs">
    <v-tabs v-model="tab">
      <v-tab
        v-for="item in tabs"
        :key="item.value"
        @change="activeTabComponent = item.component"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabs" :key="item.value">
        <component :is="activeTabComponent" :product="product" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import tabsStatic from "./tabs-static";
import ProductDescription from "./ProductDescription";
import ProductAvailability from "./ProductAvailability";
import ProductVideo from "./ProductVideo";
import ProductComments from "./ProductComments";
import ProductBuy from "./ProductBuy";
import ProductPay from "./ProductPay";
import ProductDeliver from "./ProductDeliver";
import ProductAdditional from "./ProductAdditional";
import ProductProperties from "./ProductProperties";

export default {
  name: "InfoTabs",
  components: {
    ProductDescription,
    ProductAvailability,
    ProductVideo,
    ProductComments,
    ProductBuy,
    ProductPay,
    ProductDeliver,
    ProductAdditional,
    ProductProperties,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      tabs: tabsStatic,
      tab: "",
      activeTabComponent: "ProductDescription",
    }
  },
};
</script>

<style lang="scss">
.info-tabs {
  .v-tabs-bar {
    margin-bottom: 39px;
  }
  .v-tab {
    margin: 3px;
    padding: 16px 24px 15px;
    border: $border;
    border-radius: 3px;
    color: $text-black-6;
    font-size: 0.733em;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    background-color: #fafafa;
    &--active {
      background-color: #ffffff;
      pointer-events: none;
    }
    &:hover {
      background-color: #ffffff;
      color: $text-black-6;
    }
  }
  .v-slide-group__prev--disabled,
  .v-slide-group__next--disabled {
    display: none;
  }
  .v-tabs-slider-wrapper {
    top: 3px;
    bottom: unset;
  }
}
</style>