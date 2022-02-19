<template>
  <section class="reviews">
    <div class="reviews__wrapper">
      <SectionTitle title="О нас пишут" allName="Все отзывы" allLink="/reviews">
        <button class="reviews__add-btn">
          <AppIcon symbol="icon_chat" className="review__chat-icon" />
          <span>Оставить отзыв</span>
        </button>
      </SectionTitle>
      <v-carousel class="reviews__carousel" hide-delimiters height="auto">
        <!-- <template #prev>
          <AppIcon symbol="icon_prev" className="review__icon" />
        </template> -->
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet>
            <div class="reviews__item review">
              <div class="review__info">
                <img
                  class="review__user-img"
                  :src="item.image"
                  :alt="item.name"
                />
                <div class="review__title">
                  <!-- TODO: format date -->
                  <span class="review__date">{{ item.published }}</span>
                  <span class="review__name">{{ item.name }}</span>
                </div>
                <!-- TODO: format rating -->
                <div class="review__rating">{{ item.raiting }}</div>
              </div>
              <div class="review__text">
                <AppIcon symbol="icon_quote" className="review__quote-icon" />
                <span>{{ item.text }}</span>
              </div>
              <AppButton
                label="Отзыв полностью"
                className="transparant raviews__btn"
              />
            </div>
          </v-sheet>
        </v-carousel-item>
        <!-- <template #next>
          <AppIcon symbol="icon_prev" className="review__icon" />
        </template> -->
      </v-carousel>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle";
import AppButton from "~/components/ui/AppButton";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "Reviews",
  components: {
    SectionTitle,
    AppButton,
    AppIcon,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          // TODO: Add in mocks - name, rating
          name: "Анжелика Трофимова",
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          title: "Тестовый комметарий",
          text: "Купили сыну телефон Nika 8 LITE в этом интернет-магазине. Всем рекомендую! Сейчас такой ритм жизни, что совсем нет времени ездить по магазинам. Сайт нашла в поиске. Понравились характеристики и адекватная цена за телефон. Выбирала подарок на день ро...",
          published: "1997-01-01 00:00:01",
          raiting: 5,
        },
        {
          id: 2,
          // TODO: Add in mocks - name, rating
          name: "Анжелика Трофимова",
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          title: "Тестовый комметарий",
          text: "Купили сыну телефон Nika 8 LITE в этом интернет-магазине. Всем рекомендую! Сейчас такой ритм жизни, что совсем нет времени ездить по магазинам. Сайт нашла в поиске. Понравились характеристики и адекватная цена за телефон. Выбирала подарок на день ро...",
          published: "1997-01-01 00:00:01",
          raiting: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.reviews {
  border: 1px solid #ececec;
  background-color: #f8f8f8;

  .v-sheet {
    background-color: transparent;
  }
}
.reviews__wrapper {
  padding: 60px 30px 70px;
  max-width: $max-width;
  margin: 0 auto;
}
.reviews__item {
  max-width: 902px;
  margin: 0 auto;
}
.review__info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.review__user-img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 30px;
}
.review__title {
  display: flex;
  flex-direction: column;
}
.review__date {
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999;
  margin-bottom: 5;
}
.review__name {
  font-size: 1.3333em;
  line-height: 1.4em;
}
.review__rating {
  margin-left: auto;
}
.review__text {
  color: #555555;
  margin-bottom: 30px;
  position: relative;
}
.raviews__btn.app-button {
  margin-left: 0;
}
.review__quote-icon {
  position: absolute;
  color: #999999;
  opacity: 0.35;
  left: -67px;
  top: 7px;
}
.reviews__add-btn {
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999999;
  margin-right: 37px;
  display: flex;
  align-items: center;

  &:hover {
    color: #007aff;
  }

}
.review__chat-icon {
  margin-right: 12px;
  color: inherit;
}
</style>