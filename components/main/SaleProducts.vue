<template>
  <section class="sale-products">
    <div class="sale-products__wrapper">
      <AppSectionTitle
        title="Выгодные предложения"
        allName="Все акции"
        allLink="/sale"
      />
      <div class="sale-products__list">
        <SaleCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
      <AppButton label="Загрузить еще" />
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppButton from "~/components/ui/AppButton";
import SaleCard from "./SaleCard";

export default {
  name: "SaleProducts",
  components: {
    AppSectionTitle,
    AppButton,
    SaleCard,
  },
  data() {
    return {
      // TODO: static - change in fetch
      cards: [
        {
          id: 1,
          dueDate: "До 15 февраля 2020 года",
          title: "Ликвидация склада: 2 по цене 1 для садоводов",
          description: "Суперпредложение для садоводов и огородников до 25 мая",
          timeLeft: "10д : 13ч : 21м",
          img: require("~/assets/img/sale-1.jpg"),
          discount: "",
        },
        {
          id: 2,
          dueDate: "До 15 февраля 2020 года",
          title: "Ликвидация склада: 2 по цене 1 для садоводов",
          description: "Суперпредложение для садоводов и огородников до 25 мая",
          timeLeft: "10д : 13ч : 21м",
          img: require("~/assets/img/sale-1.jpg"),
          discount: "15%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sale-products {
  border-bottom: $border;
  background-color: #f8f8f8;
}
.sale-products__wrapper {
  @include section-size;
}
.sale-products__list {
  display: flex;
  margin-bottom: 32px;
  @include adapt-mobile {
    flex-direction: column;
  }
}
</style>
