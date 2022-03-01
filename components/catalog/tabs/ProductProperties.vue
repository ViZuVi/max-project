<template>
  <SectionCard>
    <div class="product-properties">
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.product-properties__item {
  padding: 2px 0;
  display: flex;
  justify-content: space-between;
}
.product-properties__title {
  padding-right: 10px;
}
.product-properties__value {
  width: 55%;
  padding-left: 10px;
}
.product-properties__divider {
  flex-grow: 1;
  border-bottom: 1px dotted #eeeeee;
  transform: translateY(-40%);
}
</style>
