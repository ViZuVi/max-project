<template>
  <section class="reviews">
    <div class="reviews__wrapper">
      <AppSectionTitle
        title="О нас пишут"
        allName="Все отзывы"
        allLink="/reviews"
      >
        <button class="reviews__add-btn font-upper">
          <AppIcon symbol="icon_chat" className="review__chat-icon" />
          <span>Оставить отзыв</span>
        </button>
      </AppSectionTitle>
      <v-carousel class="reviews__carousel" hide-delimiters height="auto">

        <template v-slot:prev="{ on, attrs }">
          <button
            class="app__carousel-btns app__carousel-btns--prev"
            v-bind="attrs"
            v-on="on"
          >
            <AppIcon symbol="icon_prev" class="app__carousel-icon" />
          </button>
        </template>
        <template v-slot:next="{ on, attrs }">
          <button
            class="app__carousel-btns app__carousel-btns--next"
            v-bind="attrs"
            v-on="on"
          >
            <AppIcon symbol="icon_next" class="app__carousel-icon" />
          </button>
        </template>

        <v-carousel-item v-for="review in reviews" :key="review.id">
          <v-sheet>
            <div class="reviews__item review">
              <div class="review__info">
                <img
                  class="review__user-img"
                  :src="review.image"
                  :alt="review.name"
                />
                <div class="review__title">
                  <!-- TODO: format date -->
                  <span class="review__date font-upper">{{
                    review.published
                  }}</span>
                  <span class="font-large">{{ review.name }}</span>
                </div>
                <!-- TODO: format rating; api - rating ? -->
                <div class="review__rating">{{ review.raiting }}</div>
              </div>
              <div class="review__text">
                <AppIcon symbol="icon_quote" className="review__quote-icon" />
                <span>{{ review.text }}</span>
              </div>
              <AppButton label="Отзыв полностью" className="raviews__btn" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppButton from "~/components/ui/AppButton";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "Reviews",
  components: {
    AppSectionTitle,
    AppButton,
    AppIcon,
  },
  data() {
    return {
      reviews: {},
    };
  },
  async fetch() {
    const reviews = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/comments"
    );
    this.reviews = reviews.item;
  },
};
</script>

<style lang="scss">
.reviews {
  border-bottom: $border;
  background-color: #f8f8f8;

  .v-sheet {
    background-color: transparent;
  }
}
.reviews__carousel {
  @include adapt-mobile {
    padding: 25px 29px;
    background-color: #ffffff;
  }
}
.reviews__wrapper {
  padding: 60px 30px 70px;
  max-width: $max-width;
  margin: 0 auto;
  @include adapt-mobile {
    padding: 16px 30px;
  }
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
  color: #999;
  margin-bottom: 5;
}
.review__rating {
  margin-left: auto;
}
.review__text {
  color: $text-black-5;
  margin-bottom: 30px;
  position: relative;
}
.raviews__btn.app-button {
  margin-left: 0;
}
.review__quote-icon {
  position: absolute;
  color: $text-black-9;
  opacity: 0.35;
  left: -67px;
  top: 7px;
}
.reviews__add-btn {
  color: $text-black-9;
  margin-right: 37px;
  margin-left: auto;
  display: flex;
  align-items: center;

  &:hover {
    color: #007aff;
  }

  @include adapt-mobile {
    display: none;
  }
}
.review__chat-icon {
  margin-right: 12px;
  color: inherit;
}
</style>