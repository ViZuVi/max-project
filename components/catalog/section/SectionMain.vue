<template>
  <div class="section-main">
    <SortHeader />
    <ProductFilters />
    <ProductsList />
    <!-- <Pagination /> -->
    <p>
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

export default {
  name: "SectionMain",
  components: {
    SortHeader,
    ProductFilters,
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.section-main {
  padding-left: 30px;
}
</style>
