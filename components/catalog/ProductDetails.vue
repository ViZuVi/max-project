<template>
  <div class="product-details">
    <div class="product-details__header-wrapper">
      <div class="product-details__header">
        <div>
          <h1 class="product-details__title">{{ product.title }}</h1>
          <!-- TODO: get links/ header to ui -->
          <AppBreadcrumbs
            class="product-details__breadcrumbs"
            :items="[
              { title: 'Главная', link: '/' },
              { title: 'Каталог', link: '/catalog' },
              { title: product.title, link: '' },
            ]"
          />
        </div>
        <AppIcon symbol="icon_share" className="product-details__header-icon" />
      </div>
    </div>
    <div class="product-details__main">
      <div class="product-details__info-wrapper">
        <div class="product-details__img-wrapper">
          <AppProductTag class="product-details__tags" :tags="product.tags" />
          <nuxt-link
            class="product-details__img-link"
            :to="`/catalog/${product.id}`"
          >
            <img
              class="product-details__img"
              :src="product.image"
              :alt="product.title"
            />
          </nuxt-link>
        </div>
        <div class="product-details__info">
          <div class="product-details__header-controls">
            <AppProductHeaderControls class="product-details__header-btns" />
            <AppRating :showRatingValue="true" :rating="product.rating" />
            <nuxt-link class="product-details__brand-link" :to="`#`">
              <img
                :src="require('~/assets/img/brands-1.png')"
                :alt="product.vendor_code"
              />
            </nuxt-link>
          </div>
          <div class="product-details__main-actions">
            <AppProductProps
              class="product-details__props"
              :properties="product.properties"
            />
            <div class="product-details__actions-card--wrapper">
              <div class="product-details__actions-card">
                <AppProductPrice
                  class="product-details__price"
                  :price="product.price"
                  :availability="product.availability"
                />
                <div class="product-details__cart-btns">
                  <!-- TODO: value from store -->
                  <AppProductQuantity
                    class="product-details__cart-quantity"
                    v-if="!inCart"
                    :quantity="product.quantity"
                    :value="1"
                    @change="changeProductQuantity"
                    @decrease="changeProductQuantity"
                    @increase="changeProductQuantity"
                  />
                  <AppButton
                    :label="inCart ? 'В корзине' : 'В корзину'"
                    className="app-button--transparent product-details__cart-btn"
                    @click="addToCart"
                  />
                  <AppButton
                    label="Купить в 1 клик"
                    className="app-button--transparent product-details__ocb-btn"
                    @click="buy"
                  />
                </div>
              </div>

              <div class="product-details__delivery">
                <AppIcon
                  symbol="icon_truck"
                  className="product-details__truck-icon"
                />
                <button class="product-details__delivery-text">
                  Рассчитать доставку
                </button>
              </div>
              <div class="product-details__gift">
                <AppIcon
                  symbol="icon_gift"
                  className="product-details__truck-icon"
                />
                <button class="product-details__gift-text">
                  Хочу в подарок
                </button>
              </div>
              <div class="product-details__pickup">
                <AppIcon
                  symbol="icon_exclamation"
                  className="product-details__exclamation-icon"
                />
                <span class="product-details__pickup-text">
                  <span>Самовывоз сегодня - бесплатно</span>
                  <span>Доставка завтра - {{ product.deliveryPrice }} ₽</span>
                </span>
              </div>
            </div>
          </div>
          <span class="product-details__pickup-informer"
            >Цена действительна только для интернет-магазина и может отличаться
            от цен в розничных магазинах</span
          >
        </div>
      </div>
      <ProductDetailsFeatures />
    </div>
    <BottomInfo :product="product" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";
import AppBreadcrumbs from "~/components/ui/AppBreadcrumbs";
import AppProductTag from "~/components/ui/cards/AppProductTag";
import AppRating from "~/components/ui/AppRating";
import AppProductHeaderControls from "~/components/ui/cards/AppProductHeaderControls";
import AppProductProps from "~/components/ui/cards/AppProductProps";
import AppProductPrice from "~/components/ui/cards/AppProductPrice";
import AppProductQuantity from "~/components/ui/cards/AppProductQuantity";
import ProductDetailsFeatures from "./ProductDetailsFeatures";
import BottomInfo from "./BottomInfo";
import mockProduct from "./mock-product";

export default {
  name: "ProductDetails",
  components: {
    AppIcon,
    AppButton,
    AppBreadcrumbs,
    AppProductTag,
    AppRating,
    AppProductHeaderControls,
    AppProductProps,
    AppProductPrice,
    AppProductQuantity,
    ProductDetailsFeatures,
    BottomInfo,
  },
  data() {
    return {
      product: mockProduct,
    };
  },
  computed: {
    inCart() {
      return false;
      // TODO: check cart store
    },
  },
  methods: {
    ...mapActions("cart", ["changeProductQuantity"]),
    // changeProductQuantity(e) {
    //   // TODO: dispatch action in cart
    // },
    addToCart() {
      // TODO: dispatch action in cart
    },
    buy() {
      // TODO: dispatch action in cart
    },
  },
};
</script>

<style lang="scss" scoped>
.product-details__header-wrapper {
  border-bottom: $border;
}
.product-details__header {
  width: $max-width;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 30px 0;
  line-height: 25px;

  @include adapt-mobile {
    width: 100%;
    align-items: flex-start;
  }
}
.product-details__header-icon {
  width: 41px;
  color: #b8b8b8;
  &:hover {
    color: $text-link-hover;
  }
}
.product-details__breadcrumbs {
  @include adapt-mobile {
    text-align: center;
  }
}
.product-details__title {
  margin-bottom: 17px;
}
.product-details__img-wrapper {
  position: relative;
  width: 42%;
  @include adapt-mobile {
    width: 100%;
    margin-bottom: 40px;
  }
}
.product-details__img-link {
  display: block;
  padding-top: 4.133rem;
  width: 377px;
  @include adapt-mobile {
    width: 300px;
  }
}
.product-details__img {
  display: block;
  margin: 0 auto;
}
.product-details__info-wrapper {
  display: flex;
  width: $max-width;
  margin: 0 auto;
  padding: 2.2rem 30px;
  border-bottom: $border;

  @include adapt-mobile {
    flex-direction: column;
    width: 100%;
  }
}
.product-details__header-controls {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 27px;
  margin-bottom: 38px;
  border-bottom: $border;
  @include adapt-mobile {
    flex-wrap: wrap;
  }
}
.product-details__info {
  flex-grow: 1;
}
.product-details__header-btns {
  margin-right: auto;
  @include adapt-mobile {
    margin-bottom: 19px;
  }
}
.product-details__brand-link {
  padding: 5px;
  border-radius: 4px;
  max-width: 70px;
  margin-left: 38px;
}
.product-details__main-actions {
  display: flex;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.product-details__props {
  margin-right: 60px;
  margin-bottom: 10px;
}
.product-details__actions-card-wrapper {
  flex-basis: 50%;
}
.product-details__actions-card {
  margin-bottom: 16px;
  box-shadow: 0 3px 14px rgb(0 0 0 / 12%);
}
.product-details__price {
  padding: 20px 30px;
}
.product-details__cart-btns {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.product-details__cart-btn,
.product-details__cart-quantity {
  border-radius: 0;
  width: 50%;
}

.product-details__cart-quantity {
  @include adapt-mobile {
    display: none;
  }
}
.product-details__cart-btn {
  background-color: $text-link-hover;
  color: #ffffff;
  font-size: 0.7333em;
  @include adapt-mobile {
    display: none;
  }
}
.product-details__ocb-btn {
  // TODO: to button class?
  font-size: 0.7333em;
  width: 100%;
  border: 0;
  &:hover {
    background-color: #ffffff;
    color: $text-link-hover;
  }
}
.product-details__delivery,
.product-details__pickup,
.product-details__gift {
  font-size: 0.8em;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: $text-black-6;
}
.product-details__pickup,
.product-details__gift {
  padding: 10px 0 16px;
}
.product-details__delivery-text,
.product-details__gift-text {
  border-bottom: 1px dotted;
}
.product-details__truck-icon,
.product-details__exclamation-icon,
.product-details__gift-icon {
  margin-right: 7px;
  color: $text-black-9;
}
.product-details__exclamation-icon,
.product-details__gift-icon {
  align-self: flex-start;
}
.product-details__pickup-text {
  display: flex;
  flex-direction: column;
}
.product-details__pickup-informer {
  font-size: 12px;
  margin-top: 2.666rem;
  line-height: 1.692em;
  color: $text-black-9;
}
</style>