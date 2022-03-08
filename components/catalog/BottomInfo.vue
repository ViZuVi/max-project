<template>
  <div class="bottom-info">
    <div class="bottom-info__wrapper">
      <div class="bottom-info__left">
        <InfoTabs :product="product" />

        <div class="bottom-info__left-section">
          <div class="bottom-info__left-title font-large">Услуги</div>
          <SectionCard
            link="/services"
            image="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
            :content="product.service"
          />
        </div>
        <div class="bottom-info__left-section">
          <div class="bottom-info__left-title font-large">Статьи</div>
          <SectionCard
            v-for="article in product.articles"
            :key="article.title"
            class="bottom-info__article"
            image="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
            :content="article"
          />
        </div>
        <div class="bottom-info__left-additional-goods">
          <!-- TODO: static - change lists -->
          <ProductsSuggestions
            :products="{ mightLike: [product], buyWith: [product] }"
            :inCart="inCart"
          />
        </div>
      </div>

      <div class="bottom-info__right">
        <div class="bottom-info__brand">
          <nuxt-link
            class="bottom-info__brand-link"
            :to="`${product.brand.link}`"
          >
            <img
              class="bottom-info__brand-img"
              :src="product.brand.image"
              :alt="product.brand.title"
            />
          </nuxt-link>
          <div class="bottom-info__brand-text font-small">
            {{ product.brand.text }}
          </div>
          <nuxt-link class="bottom-info__brand-link font-small" to="#"
            >Все товары категории</nuxt-link
          >
          <nuxt-link class="bottom-info__brand-link font-small" to="#"
            >Все товары бренда {{ product.brand.title }}</nuxt-link
          >
        </div>

        <div class="bottom-info__recommendations">
          <div class="bottom-info__section-title font-medium">Рекомендуем</div>
          <!-- TODO: static - change list -->
          <AppProductCardSmall
            v-for="product in [
              product,
              { ...product, id: 2 },
              { ...product, id: 3 },
            ]"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="bottom-info__feedback">
          <div class="bottom-info__feedback-info">
            <AppIcon
              symbol="icon_ask_question"
              className="bottom-info__feedback-icon"
            />
            <div class="bottom-info__feedback-title">Нужна консультация?</div>
            <div class="bottom-info__feedback-text font-small">
              Наши специалисты ответят на любой интересующий вопрос
            </div>
          </div>
          <AppButton
            label="Задать вопрос"
            className="bottom-info__feedback-btn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoTabs from "./tabs/InfoTabs";
import SectionCard from "./SectionCard";
import ProductsSuggestions from "./ProductsSuggestions";
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";
import AppProductCardSmall from "~/components/ui/cards/AppProductCardSmall";

export default {
  name: "BottomInfo",
  components: {
    InfoTabs,
    SectionCard,
    ProductsSuggestions,
    AppProductCardSmall,
    AppIcon,
    AppButton,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    inCart: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-info {
  border-top: $border;
  position: relative;
}
.bottom-info__wrapper {
  max-width: $max-width;
  margin: 3.133rem auto 50px;
  padding: 0 30px;
  display: flex;
}
.bottom-info__left {
  width: calc(100% - 305px);
  @include adapt-mobile {
    width: 100%;
  }
}
.bottom-info__left-section {
  margin: 3.133rem 0 3.133rem;
}
.bottom-info__left-title {
  padding-bottom: 1.933rem;
}
.bottom-info__right {
  width: 305px;
  margin-left: 40px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  align-self: flex-start;
  @include adapt-mobile {
    display: none;
  }
}
.bottom-info__brand {
  border: $border;
  border-radius: 3px;
  padding: 30px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
}
.bottom-info__brand-img {
  max-width: 70px;
  padding: 5px;
}
.bottom-info__brand-text {
  padding-top: 18px;
  padding-bottom: 17px;
}
.bottom-info__brand-link {
  padding-bottom: 6px;
  color: $text-link-hover;

  &:hover {
    color: $text-black-3;
  }
}
.bottom-info__section-title {
  margin-bottom: 23px;
}
.bottom-info__feedback {
  &:hover {
    .bottom-info__feedback-btn {
      background-color: $text-link-hover;
      color: #ffffff;
      &::before {
        height: 0;
        background-color: $text-link-hover;
      }
    }
  }
}
.bottom-info__feedback-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 32px;
  padding: 45px 15px 15px;
  border: $border;
  border-bottom: 0;
  border-radius: 2px;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
}
.bottom-info__feedback-icon {
  color: $text-link-hover;
}
.bottom-info__feedback-title {
  margin: 0 0 14px;
  font-size: 1.3333em;
  line-height: 1.2941em;
}
.bottom-info__feedback-text {
  margin-bottom: 7px;
}
.bottom-info__feedback-btn {
  margin-bottom: 0;
  width: 100%;
  border: $border;
  border-top: 0;
  padding-bottom: 21px;
  padding-top: 20px;
  font-size: 0.667em;
  line-height: 1.3em;
  letter-spacing: 0.8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30px;
    right: 30px;
    height: 1px;
    background-color: #ececec;
  }
}
.bottom-info__article {
  margin-top: -1px;
}
</style>