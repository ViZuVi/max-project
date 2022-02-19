<template>
  <section class="lookbooks">
    <div class="lookbooks__wrapper">
      <SectionTitle title="Образы" allName="Все образы" allLink="/lookbooks">
        <AppTabs :tabs="['Мужчины', 'Женщины', 'Дети']" />
      </SectionTitle>
      <div class="lookbooks__list">
        <LookBooksCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle";
import LookBooksCard from "./LookBooksCard";
import AppTabs from "~/components/ui/AppTabs";

export default {
  name: "LookBooks",
  components: {
    SectionTitle,
    LookBooksCard,
    AppTabs,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: require("~/assets/img/lookbooks-1.jpg"),
          title: "Городской образ",
          person: "мужчины",
          type: "На каждый день",
          description:
            "Быть стильным, значит выделяться. Клетка не уходит из мира моды, а расширяет границы повседневных образов. С рубашкой и штанами можно сделать деловой look, а можно уличный. Выражайте свое настроение с помощью ярких аксессуаров и создавайте неповторимый образ.",
          props: [
            { id: 1, type: "Сезон", value: "Весна-лето 2020" },
            { id: 2, type: "Стиль", value: "Городской" },
            { id: 3, type: "Цвет", value: "Светлые тона" },
            { id: 4, type: "Ценовая категория", value: "до 15 000 р." },
          ],
          items: [
            {
              id: 1,
              src: require("~/assets/img/sneakers.jpg"),
              title: "Кроссовки для бега мужские",
              price: "4 800 ₽",
            },
            {
              id: 2,
              src: require("~/assets/img/sneakers.jpg"),
              title: "Кроссовки для бега мужские",
              price: "4 800 ₽",
            },
            {
              id: 3,
              src: require("~/assets/img/sneakers.jpg"),
              title: "Кроссовки для бега мужские",
              price: "4 800 ₽",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.lookbooks {
  border-bottom: 1px solid #ececec;
}
.lookbooks__wrapper {
  @include section-size;
}
</style>
