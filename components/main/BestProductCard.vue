<template>
<!-- TODO: check class -->
  <div
    class="best-product-card"
    :class="index === 0 && !isMobile ? 'best-product-card--prime' : ''"
  >
    <div class="best-product-card__wrapper">
      <div class="best-product-card__img-wrapper">
        <div class="best-product-card__tags">
          <div
            class="best-product-card__tag"
            v-for="tag in product.tags"
            :key="tag.id"
            :style="{ backgroundColor: tag.color }"
          >
            {{ tag.title }}
          </div>
        </div>
        <nuxt-link
          :to="`/catalog/${product.id}`"
          class="best-product-card__link"
        >
          <img
            class="best-product-card__img"
            :src="product.image"
            :alt="product.title"
          />
        </nuxt-link>
        <div class="best-product-card__menu">
          <AppButton
            btnSymbol="icon_heart"
            className="best-product-card_menu-btn"
            @click="addToFavourite"
          />
          <AppButton
            btnSymbol="icon_diagram"
            className="best-product-card_menu-btn"
            @click="addToCompare"
          />
          <AppButton
            btnSymbol="icon_bag"
            className="best-product-card_menu-btn best-product-card_menu-btn--cart"
            @click="fastBuy"
          />
          <!-- TODO: from UI -->
          <v-dialog v-model="dialog" width="968">
            <template v-slot:activator="{ on, attrs }">
              <AppButton
                v-bind="attrs"
                v-on="on"
                btnSymbol="icon_eye"
                className="best-product-card_menu-btn best-product-card_menu-btn--eye"
              />
            </template>
            <AppProductsCard :product="product" />
          </v-dialog>
        </div>
      </div>
      <div class="best-product-card__info">
        <div class="best-product-card__info-wrapper">
          <AppRating
            class="best-product-card__rating"
            :rating="product.rating"
            :showRatingValue="index !== 0"
          />
          <nuxt-link
            class="best-product-card__title"
            :to="`/catalog/${product.id}`"
            >{{ product.title }}</nuxt-link
          >
          <span class="best-product-card__availability">{{
            product.availability
          }}</span>
          <span class="best-product-card__code">Арт.: {{ product.code }}</span>
        </div>
        <p class="best-product-card__price font-medium">
          {{ product.price }} ₽/шт
        </p>
      </div>
    </div>
    <AppButton
      label="Подробнее"
      className="best-product-card__details-btn"
      @click="$router.push(`/catalog/${product.id}`)"
    />
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";
import AppRating from "~/components/ui/AppRating";
import AppProductsCard from "~/components/ui/cards/AppProductsCard";

export default {
  title: "BestProductCard",
  components: {
    AppIcon,
    AppButton,
    AppRating,
    AppProductsCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: false,
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    addToFavourite() {},
    addToCompare() {},
    fastBuy() {},
  },
};
</script>

<style lang="scss" scoped>
.best-product-card {
  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px #ececec;
  margin-right: -1px;
  padding: 25px;
  position: relative;
  transition: opacity 0.3s ease;
  max-width: 25%;
  flex-grow: 1;
  &:hover {
    .best-product-card__menu {
      opacity: 1;
      display: block;
    }
    .best-product-card__details-btn {
      display: block;
    }
  }
  @include adapt-mobile {
    max-width: 50%;
  }
}
.best-product-card__img-wrapper {
  position: relative;
}
.best-product-card__tag {
  position: absolute;
  left: 0;
  top: 0;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: 0.8em;
  line-height: 1.692em;
  background-color: #ffffff;
  &:not(:last-child) {
    margin-right: 4px;
  }
}
.best-product-card__menu {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  @include adapt-mobile {
    opacity: 1;
    display: flex;
    align-items: flex-end;
    top: unset;
    left: unset;
    right: 0;
    bottom: 0;
  }
}
.best-product-card_menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  width: 32px;
  height: 32px;
  padding: 0;
  padding-top: 2px;
  padding-top: 6px;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: $text-link-hover;
  }
  @include adapt-mobile {
    &:not(:last-child) {
      margin-right: 4px;
    }
    &--cart,
    &--eye {
      display: none;
    }
  }
}
.best-product-card__info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.best-product-card__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .best-product-card__availability {
    font-size: 0.8em;
    margin-right: 24px;
    margin-left: 15px;
    color: #5fa800;
    border-bottom: 1px dotted #5fa800;
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
  .best-product-card__price {
    margin: 0;
    margin-top: 7px;
    font-weight: bold;
    color: $text-black-3;
  }
  .best-product-card__code {
    display: none;
    font-size: 0.8em;
    line-height: 1.692em;
    color: $text-black-9;
  }
}
.best-product-card__tags {
  @include adapt-mobile {
    display: none;
  }
}
.best-product-card__title {
  @include adapt-mobile {
    font-size: 13px;
  }
}
.best-product-card__details-btn {
  display: none;
  position: absolute;
  background-color: $text-link-hover;
  color: #ffffff;
  bottom: 0;
  transform: translateY(100%);
  z-index: 2;
  left: 0;
  right: 0;

  @include adapt-mobile {
    display: block;
    position: static;
    padding: 8px 5px 7px;
    margin-top: 15px;
    transform: unset;
    width: 100%;
  }
}
.best-product-card--prime {
  padding: 0;
  max-width: 50%;
  flex-grow: 1;

  .best-product-card__img-wrapper {
    margin: 0;
  }
  .best-product-card__tag {
    top: 25px;
    left: 25px;
  }
  .best-product-card__menu {
    top: 25px;
    right: 25px;
  }
  .best-product-card__img {
    display: block;
  }
  .best-product-card__info {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
  }
  .best-product-card__info-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .best-product-card__title,
  .best-product-card__title:hover,
  .best-product-card__price {
    color: #ffffff;
  }
  .best-product-card__title {
    order: 1;
    flex-basis: 100%;
  }
  .best-product-card__availability {
    margin-left: 40px;
  }
  .best-product-card__code {
    display: block;
  }
}
.best-product-card__rating {
  @include adapt-mobile {
    display: none;
  }
}
</style>