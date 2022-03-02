<template>
  <div class="product-card-props">
    <span class="product-card-props__title">Характеристики</span>
    <div
      class="font-small"
      v-for="prop in properties"
      :key="prop.id"
    >
      <span class="product-card-props__name">{{ prop.title }}</span>
      <span class="product-card-props__measure" v-if="prop.measure"
        >, {{ prop.measure }}</span
      >
      <span class="product-card-props__value"> - {{ prop.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProductProps",
  props: {
    properties: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card-props__title {
  display: block;
  color: $text-black-3;
  margin-bottom: 11px;
  font-size: 0.933em;
  line-height: 1.501em;
}
.product-card-props__name,
.product-card-props__measure {
  color: #999;
}
.product-card-props__value {
  color: $text-black-3;
}
</style>
