<template>
  <section class="day-offer">
    <div class="day-offer__wrapper">
      <AppSectionTitle
        title="Товар дня"
        allName="Весь каталог"
        allLink="/catalog"
        iconSymbol="icon_hot"
      />
            <div class="day-offer-card">
              <div class="day-offer-card__img-wrapper">
                <AppProductTag
                  class="day-offer-card__tags"
                  :tags="product.tags"
                />
                <nuxt-link
                  class="day-offer-card__link"
                  :to="`/catalog/${product.id}`"
                >
                  <img
                    class="day-offer-card__img"
                    :src="product.image"
                    alt=""
                  />
                </nuxt-link>
                <AppProductMenu
                  :product="product"
                  class="day-offer-card__menu"
                />
              </div>
              <div class="day-offer-card__info-wrapper">
                <AppSaleTimer class="day-offer-card__timer" />
                <AppRating
                  class="day-offer-card__rating"
                  :rating="product.rating"
                  :showRatingValue="false"
                />
                <nuxt-link
                  class="day-offer-card__title font-large"
                  :to="`/catalog/${product.id}`"
                  >{{ product.title }}</nuxt-link
                >
                <div>
                  <span class="day-offer-card__availability">{{
                    product.availability
                  }}</span>
                  <span class="day-offer-card__code"
                    >Арт.: {{ product.code }}</span
                  >
                </div>
                <p class="day-offer-card__price font-medium">
                  {{ product.price }} ₽/шт
                </p>
                <!-- TODO: saving? -->
                <AppButton
                  label="Подробнее"
                  className="day-offer-card__details-btn app-button--transparent"
                  @click="$router.push(`/catalog/${product.id}`)"
                />
              </div>
            </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppProductTag from "~/components/ui/cards/AppProductTag";
import AppProductMenu from "~/components/ui/cards/AppProductMenu";
import AppSaleTimer from "~/components/ui/cards/AppSaleTimer";
import AppRating from "~/components/ui/AppRating";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "DayOffer",
  components: {
    AppSectionTitle,
    AppProductTag,
    AppProductMenu,
    AppSaleTimer,
    AppRating,
    AppButton,
  },
  data() {
    return {
      product: {},
    };
  },
  async fetch() {
    const dayProduct = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/catalog/day/products"
    );
    this.product = dayProduct.item;
  },
};
</script>

<style lang="scss" scoped>
.day-offer {
  border-bottom: 1px solid #ececec;
}
.day-offer__title {
  margin-right: auto;
}
.day-offer__wrapper {
  padding: 60px 30px 70px;
  max-width: $max-width;
  margin: 0 auto;
}
.day-offer-card {
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  display: flex;

  @include adapt-mobile {
    flex-direction: column;
  }
}
.day-offer-card__img-wrapper,
.day-offer-card__info-wrapper {
  position: relative;
  flex-basis: 50%;
  margin: 0 16px;
}
.day-offer-card__img-wrapper {
  @include adapt-mobile {
    margin: 30px 16px 26px;
    max-width: 350px;
  }
}
.day-offer-card__info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.day-offer-card__tags {
  @include adapt-mobile {
    display: none;
  }
}
.day-offer-card__menu {
  @include adapt-mobile {
    left: 0;
    bottom: 0;
    right: unset;
    top: unset;
    display: flex;
  }
}
.day-offer-card__rating {
  margin-bottom: 20px;
}
.day-offer-card__availability {
  font-size: 0.8em;
  margin-right: 24px;
  margin-left: 15px;
  color: #5fa800;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #5fa800;
  }
}
.day-offer-card__code {
  font-size: 0.8em;
  line-height: 1.692em;
  color: $text-black-9;
}
.day-offer-card__price {
  margin: 0;
  margin-top: 7px;
  font-weight: bold;
  color: $text-black-3;
}
.day-offer-card__details-btn {
  margin-left: 0;
  background-color: $text-link-hover;
  color: #ffffff;
  margin: 30px 0 10px;
}
</style>
