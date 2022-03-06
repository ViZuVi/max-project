<template>
  <div class="product-filters">
    <AppIcon symbol="icon_filter" className="product-filters__icon" />
    <div class="product-filters__list">
      <AppFilterItem name="Цена" :hasDropdownIcon="true" />
      <AppFilterItem name="Наши предложения" :hasDropdownIcon="true" />
      <AppFilterItem name="Бренд" :hasDropdownIcon="true" />
      <AppFilterItem name="В наличии" :hasDropdownIcon="false" />
      <AppFilterItem name="Тип" :hasDropdownIcon="true" />
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppFilterItem from "~/components/ui/AppFilterItem";

export default {
  name: "ProductFilters",
  components: {
    AppIcon,
    AppFilterItem,
  },
};
</script>

<style lang="scss" scoped>
.product-filters {
  display: flex;
}
.product-filters__list {
  display: flex;
  flex-wrap: wrap;
}
.product-filters__icon {
  padding-right: 16px;
}
</style>
