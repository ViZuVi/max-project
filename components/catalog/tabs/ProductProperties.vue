<template>
  <div class="product-properties">
    <SectionCard class="product-properties-card">
      <div class="product-properties__wrapper">
        <div
          class="product-properties__item"
          v-for="prop in product.properties"
          :key="prop.id"
        >
          <span class="product-properties__title">{{ prop.title }}</span>
          <span class="product-properties__divider"></span>
          <span class="product-properties__value">{{ prop.value }}</span>
        </div>
      </div>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from "../SectionCard";

export default {
  name: "ProductProperties",
  components: {
    SectionCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.product-properties {
  .product-properties-card {
    @include adapt-mobile {
      padding: 10px 29px 27px;
    }
  }
}
.product-properties__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.product-properties__item {
  padding: 2px 0;
  display: flex;
  justify-content: space-between;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.product-properties__title {
  padding-right: 10px;
  color: $text-black-6;
  @include adapt-mobile {
    font-size: 0.867em;
    line-height: 1.692em;
  }
}
.product-properties__value {
  width: 55%;
  padding-left: 10px;
  font-size: 1em;
  color: $text-black-3;
  @include adapt-mobile {
    padding-left: 0;
  }
}
.product-properties__divider {
  flex-grow: 1;
  border-bottom: 1px dotted #eeeeee;
  transform: translateY(-40%);
  @include adapt-mobile {
    display: none;
  }
}
</style>
