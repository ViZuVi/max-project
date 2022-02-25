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
        <div class="product-card__header-btn-wrapper">
          <AppButton
            label="Отложить"
            className="app-button--transparent product-card__header-btn app-button--small"
            btnSymbol="icon_heart"
            iconClassName="product-card__header-icon"
          />
          <AppButton
            label="Сравнить"
            className="app-button--transparent product-card__header-btn app-button--small"
            btnSymbol="icon_diagram"
            iconClassName="product-card__header-icon"
          />
        </div>
        <AppRating :rating="product.rating" />
        <nuxt-link
          class="product-card__brand-link"
          :to="`/info/brands/${product.brand.link}`"
        >
          <img :src="product.brand.image" :alt="product.brand.title" />
        </nuxt-link>
      </div>
    </div>
    <div class="product-card__main">
      <div class="product-card__img-wrapper">
        <div class="product-card__tags"></div>
        <div class="product-card__images">
          <img :src="product.images[0]" alt="" />
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__price">
          {{ product.price.toLocaleString() }} ₽/шт
        </div>
        <div class="product-card__availability-wrapper">
          <!-- TODO: availability modal? -->
          <span class="product-card__availability">{{
            product.availability
          }}</span>
          <span class="product-card__question" v-if="product.price">
            <AppIcon
              symbol="icon_wallet"
              className="product-card__wallet-icon"
            />
            <button class="product-card__question-text">Нашли дешевле?</button>
          </span>
        </div>
        <div class="product-card__main-btn-wrapper">
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
        <div>
          <span class="product-card__properties">Характеристики</span>
          <div
            class="product-card__property"
            v-for="prop in product.properties"
            :key="prop.id"
          >
            <span class="product-card__property-title">{{ prop.title }}</span>
            <span class="product-card__property-measure" v-if="prop.measure"
              >, {{ prop.measure }}</span
            >
            <span class="product-card__property-value"> - {{ prop.value }}</span>
          </div>
        </div>
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

export default {
  title: "AppProductsCard",
  components: {
    AppButton,
    AppRating,
    AppIcon,
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
  color: #333333;
  &:hover {
    color: #365edc;
  }
}
.product-card__header-controls {
  display: flex;
}
.product-card__header-btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin-right: 38px;
}
.product-card__header-icon {
  order: -1;
  color: #999999;
}
.product-card__header-btn {
  display: flex;
  margin-left: 0;
  border-color: #eeeeee;
  color: #333333;
  &:first-child {
    margin-right: 8px;
  }
}
// .app-button__label {
//   order: 2;
// }
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
  color: #333333;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #365edc;
    border-color: #365edc;
    color: #ffffff;
  }
}
.product-card__brand-link {
  padding: 5px;
  border-radius: 4px;
  margin-left: auto;
  max-width: 70px;
}
.product-card__price {
  font-size: 1.733em;
  line-height: 1.454em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333;
}
.product-card__availability-wrapper {
  display: flex;
  margin-bottom: 20px;
}
.product-card__availability {
  font-size: 0.8em;
  line-height: 15px;
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
.product-card__question,
.product-card__delivery,
.product-card__pickup {
  font-size: 0.8em;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #666666;
}
.product-card__delivery {
  margin-bottom: 9px;
}
.product-card__question-text,
.product-card__delivery-text {
  border-bottom: 1px dotted;
}
.product-card__wallet-icon,
.product-card__truck-icon,
.product-card__exclamation-icon {
  margin-right: 7px;
  color: #999999;
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
    background-color: #365edc;
    color: #ffffff;
    margin-bottom: 12px;
  }
}
.product-card__description {
  font-size: 0.867em;
  line-height: 1.692em;
  color: #666666;
  margin-bottom: 13px;
}
.product-card__properties {
  color: #333333;
  margin-bottom: 11px;
  font-size: 0.933em;
  line-height: 1.501em;
}
.product-card__property {
  font-size: 0.867em;
  line-height: 1.692em;
}
.product-card__property-title,
.product-card__property-measure {
  color: #999;
}
.product-card__property-value {
  color: #333333;
}
</style>
