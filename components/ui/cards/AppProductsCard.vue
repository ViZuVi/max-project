<template>
  <v-card class="product-card">
    <div class="product-card__header">
      <h2 class="product-card__header-title">
        <nuxt-link
          class="product-card__header-link"
          :to="`/catalog/${product.id}`"
          >{{ product.title }}</nuxt-link
        >
      </h2>
      <div class="product-card__header-controls">
        <AppProductHeaderControls />
        <AppRating :rating="product.rating" />
        <nuxt-link class="product-card__brand-link" :to="`#`">
          <img :src="product.image" :alt="product.vendor_code" />
        </nuxt-link>
      </div>
    </div>
    <div class="product-card__main">
      <div class="product-card__img-wrapper">
        <div class="product-card__tags"></div>
        <div class="product-card__images">
          <img :src="product.image" alt="" />
        </div>
      </div>
      <div class="product-card__info">
        <AppProductPrice
          :price="product.price"
          :availability="product.availability"
        />
        <div class="product-card__main-btn-wrapper">
          <!-- TODO: Add quantity -->
          <AppButton
            :label="inCart ? 'В корзине' : 'В корзину'"
            className="app-button--transparent product-card__main-btn product-card__main-btn--cart"
          />
          <AppButton
            label="Купить в 1 клик"
            className="app-button--transparent product-card__main-btn product-card__main-btn--buy"
          />
        </div>
        <span class="product-card__delivery">
          <AppIcon symbol="icon_truck" className="product-card__truck-icon" />
          <button class="product-card__delivery-text">
            Рассчитать доставку
          </button>
        </span>
        <span class="product-card__pickup">
          <AppIcon
            symbol="icon_exclamation"
            className="product-card__exclamation-icon"
          />
          <span class="product-card__pickup-text">
            <span>Самовывоз сегодня - бесплатно</span>
            <span>Доставка завтра - {{ product.deliveryPrice }} ₽</span>
          </span>
        </span>
        <div class="product-card__description">{{ product.description }}</div>
        <AppProductProps :properties="product.properties" />
      </div>
    </div>
    <div class="product-card__footer">
      <nuxt-link
        class="product-card__footer-details-btn"
        :to="`/catalog/${product.category}/${product.subCategory}/${product.id}`"
      >
        <span>Больше информации о товаре</span>
        <AppIcon symbol="" />
      </nuxt-link>
    </div>
  </v-card>
</template>

<script>
import AppButton from "~/components/ui/AppButton";
import AppRating from "~/components/ui/AppRating";
import AppIcon from "~/components/ui/AppIcon";
import AppProductHeaderControls from "~/components/ui/cards/AppProductHeaderControls";
import AppProductProps from "~/components/ui/cards/AppProductProps";
import AppProductPrice from "~/components/ui/cards/AppProductPrice";

export default {
  title: "AppProductsCard",
  components: {
    AppButton,
    AppRating,
    AppIcon,
    AppProductHeaderControls,
    AppProductProps,
    AppProductPrice
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    inCart: {
      // TODO: add to store in parrent
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card__header {
  padding: 35px 37px 24px;
  border-bottom: 1px solid #f2f2f2;
}
.product-card__header-title {
  font-weight: 400;
  font-size: 1.733em;
  margin-bottom: 19px;
}
.product-card__header-link {
  color: $text-black-3;
  &:hover {
    color: $text-link-hover;
  }
}
.product-card__header-controls {
  display: flex;
  align-items: center;
}
.product-card__img-wrapper {
  border-right: 1px solid #f2f2f2;
}
.product-card__main {
  display: flex;
}
.product-card__img-wrapper,
.product-card__info {
  flex-basis: 50%;
  padding: 32px 40px;
}
.product-card__footer-details-btn {
  display: block;
  padding: 16px 26px;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 0.7333em;
  text-transform: uppercase;
  border: 1px solid #f2f2f2;
  letter-spacing: 0.8px;
  background-color: #fafafa;
  color: $text-black-3;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: $text-link-hover;
    border-color: $text-link-hover;
    color: #ffffff;
  }
}
.product-card__brand-link {
  padding: 5px;
  border-radius: 4px;
  margin-left: auto;
  max-width: 70px;
}
.product-card__delivery,
.product-card__pickup {
  font-size: 0.8em;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: $text-black-6;
}
.product-card__delivery {
  margin-bottom: 9px;
}
.product-card__delivery-text {
  border-bottom: 1px dotted;
}
.product-card__truck-icon,
.product-card__exclamation-icon {
  margin-right: 7px;
  color: $text-black-9;
}
.product-card__exclamation-icon {
  align-self: flex-start;
}
.product-card__pickup-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}
.product-card__main-btn-wrapper {
  margin-bottom: 14px;
}
.product-card__main-btn {
  width: 100%;
  padding: 16px 26px 16px;
  font-size: 0.7333em;
  letter-spacing: 0.8px;

  &--cart {
    background-color: $text-link-hover;
    color: #ffffff;
    margin-bottom: 12px;
  }
}
.product-card__description {
  font-size: 0.867em;
  line-height: 1.692em;
  color: $text-black-6;
  margin-bottom: 13px;
}
</style>
