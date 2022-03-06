<template>
  <div class="product-filters">
    <AppIcon symbol="icon_filter" className="product-filters__icon" />
    <div class="product-filters__list">
      <AppFilterItem name="Цена" :hasDropdownIcon="true">
        <AppRange title="Розничная цена" />
        <AppRange title="Оптовая цена" />
      </AppFilterItem>
      <AppFilterItem name="Наши предложения" :hasDropdownIcon="true">
        <AppSelect :items="['test1', 'test2']" value="test1" />
      </AppFilterItem>
      <AppFilterItem name="Бренд" :hasDropdownIcon="true">
        <AppCheckboxes
          :items="[
            { title: 'Desti', value: 'desti' },
            { title: 'Nika', value: 'nika' },
          ]"
        />
      </AppFilterItem>
      <AppFilterItem name="В наличии" :hasDropdownIcon="false" />
      <AppFilterItem name="Тип" :hasDropdownIcon="true">
        <AppRadioGroup
          :items="[
            { title: 'Все', value: 'all' },
            { title: 'Full HD', value: 'hd' },
          ]"
          value=""
        />
      </AppFilterItem>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppRange from "~/components/ui/filters/AppRange";
import AppSelect from "~/components/ui/AppSelect";
import AppCheckboxes from "~/components/ui/AppCheckboxes";
import AppRadioGroup from "~/components/ui/AppRadioGroup";
import AppFilterItem from "~/components/ui/AppFilterItem";

export default {
  name: "ProductFilters",
  components: {
    AppIcon,
    AppFilterItem,
    AppRange,
    AppSelect,
    AppCheckboxes,
    AppRadioGroup,
  },
};
</script>

<style lang="scss" scoped>
.product-filters {
  display: flex;
  padding: 11px 0;
}
.product-filters__list {
  display: flex;
  flex-wrap: wrap;
  @include adapt-mobile {
    display: none;
  }
}
.product-filters__icon {
  padding-right: 16px;
}
</style>
