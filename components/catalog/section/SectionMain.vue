<template>
  <div class="section-main">
    <SortHeader
      :viewType="productsViewType"
      :viewSize="productsViewSize"
      @change-view-size="productsViewSize = $event"
      @change-view-type="productsViewType = $event"
    />
    <ProductFilters />
    <ProductsList
      :products="products"
      :viewType="productsViewType"
      :viewSize="productsViewSize"
    />
    <div class="section-main__pagination-wrapper">
      <v-pagination :value="1" :length="5"></v-pagination>
    </div>
    <p class="section-main__text">
      В интернет-магазине представлено 500 позиций, чтобы выбрать технику для
      дома, работы и развлечений. Разобраться в разнообразии электроники поможет
      онлайн-консультант. С учетом пожеланий подберем товары по габаритам,
      функционалу и приемлемой цене. Выбирая электронику онлайн, получите
      профессиональную консультацию. Для этого оставьте заявку на сайте. Наша
      команда круглосуточно принимает заказы, а для удобства по городу работает
      доставка.
    </p>
  </div>
</template>

<script>
import SortHeader from "./SortHeader";
import ProductFilters from "./ProductFilters";
import ProductsList from "./ProductsList";

export default {
  name: "SectionMain",
  components: {
    SortHeader,
    ProductFilters,
    ProductsList,
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      productsViewType: "tile",
      productsViewSize: "small",
    };
  },
};
</script>

<style lang="scss">
.section-main {
  padding-left: 30px;
}
.section-main__text {
  padding-top: 40px;
  margin-bottom: 30px;
}
.section-main__pagination-wrapper {
  .v-pagination__navigation {
    box-shadow: none;
    &--disabled {
      display: none;
    }
  }
  .v-pagination__item {
    box-shadow: none;
    width: 26px;
    height: 26px;
    min-width: unset;
    border-radius: 3px;
    line-height: 26px;
    margin: 0 12px 5px 12px;
    font-size: 14px;
    font-weight: bold;
    &--active {
      background-color: $text-link-hover !important;
    }
  }
}
</style>
