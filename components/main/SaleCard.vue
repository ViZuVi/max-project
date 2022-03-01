<template>
  <div class="sale-card">
    <div class="sale-card__info">
      <div class="sale-card__due-date-wrapper">
        <AppIcon symbol="icon_lightning" className="sale-card__icon" />
        <span>{{ card.dueDate }}</span>
      </div>
      <nuxt-link class="sale-card__title" :to="`/sale${card.id}`" href="sale">{{
        card.title
      }}</nuxt-link>
      <p class="sale-card__decription">{{ card.description }}</p>
      <span class="sale-card__discount" v-if="card.discount">{{
        card.discount
      }}</span>
      <span class="sale-card__timer">{{ card.timeLeft }}</span>
    </div>
    <nuxt-link
      class="sale-card__img-wrapper"
      :style="{ backgroundImage: `url(${card.img})` }"
      :to="`/sale${card.id}`"
    >
    </nuxt-link>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "SaleCard",
  components: {
    AppIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.sale-card {
  display: flex;
  padding: 32px 40px 36px 37px;
  border: $border;
  background-color: #ffffff;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
  }
  &:not(:last-child) {
    margin-right: 32px;
    @include adapt-mobile {
      margin-right: 0;
      margin-bottom: 26px;
    }
  }
  @include adapt-mobile {
    background-color: transparent;
    padding: 0;
    border: 0;
    margin-right: 0;
  }
}
.sale-card__info {
  max-width: 369px;
}
.sale-card__due-date-wrapper {
  color: $text-black-9;
  font-size: 0.867em;
  line-height: 1.692em;
  margin-bottom: 13px;
}
.sale-card__icon {
  margin-right: 9px;
  color: #fc5a42;
}
.sale-card__title {
  display: block;
  font-size: 1.2em;
  line-height: 1.454em;
  color: $text-black-3;
  margin-bottom: 16px;
  &:hover {
    color: $text-link-hover;
  }
  @include adapt-mobile {
    font-size: 14px;
    line-height: 21px;
  }
}
.sale-card__decription {
  font-size: 0.867em;
  line-height: 1.692em;
  margin-bottom: 20px;
  color: #777777;
}
.sale-card__timer,
.sale-card__discount {
  padding: 5px 9px;
  background-color: #ffffff;
  border: 1px solid #eee;
  font-weight: bold;
  font-size: 13px;
  border-radius: 2px;
}
.sale-card__discount {
  background-color: #fbdc3f;
  border-color: #fbdc3f;
}
.sale-card__img-wrapper {
  width: 170px;
  height: 170px;
  overflow: hidden;
  margin-left: auto;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  @include adapt-mobile {
    width: 90px;
    height: 90px;
    order: -1;
    flex-shrink: 0;
    margin-right: 15px;
  }
}
</style>
