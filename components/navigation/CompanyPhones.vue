<template>
  <div class="company-phones" @mouseleave="$emit('close-phones')">
    <span class="company-phones__block company-phones__block--header">
      <span>Телефоны</span>
      <AppIcon
        symbol="icon_close_large"
        className="company-phones__close-icon"
        @click="$emit('close-phones')"
      />
    </span>
    <a
      class="company-phones__block company-phones__block--number"
      href="tel:+70000000000"
    >
      <img
        class="company-phones__img"
        :src="require('~/assets/img/beeline.svg')"
        alt=""
      />
      <span>+7 (000) 000 00 00</span></a
    >
    <a
      class="company-phones__block company-phones__block--number"
      href="tel:+70000000006"
    >
      <img
        class="company-phones__img"
        :src="require('~/assets/img/megafon.svg')"
        alt=""
      />
      <span class="company-phones__number-wrapper">
      <span>+7 (000) 000 00 06</span>
      <span class="company-phones__description">Бухгалтерия</span>
      </span>
    </a>
    <button class="company-phones__block company-phones__block--callback-btn">
      Заказать звонок
    </button>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "CompanyPhones",
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss" scoped>
.company-phones {
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 20px;
  max-width: 245px;
  min-width: 198px;
  max-height: 500px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 3px;
  z-index: 3;
  overflow: hidden;

  @include adapt-mobile {
    display: block;
    left: 0;
    right: 0;
    max-width: 100%;
    width: 100%;
    top: 60px;
    box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);
  }

  .company-phones__block {
    padding: 18px 22px 18px;
    color: $text-black-2;
    font-size: 1.0666em;
    line-height: 25px;
    white-space: nowrap;
    font-weight: bold;
    width: 100%;
    &:not(:first-child) {
      border-top: 1px solid #f2f2f2;
    }
    &:hover {
      color: $text-black-2;
      background-color: #fafafa;
    }

    &--header {
      display: none;
      @include adapt-mobile {
        display: flex;
        justify-content: space-between;
      }
    }
    &--number {
      display: flex;
    }
    &--callback-btn {
      display: none;
      @include adapt-mobile {
        display: block;
        padding: 18px 22px 18px;
        color: $text-black-2;
        font-weight: normal;
        text-align: left;
        border-bottom: $border;
      }
    }
  }
}
.company-phones__description {
  color: $text-black-9;
  display: block;
  font-size: 0.8em;
  font-weight: 400;
  padding-top: 6px;
  @include adapt-mobile {
    padding-top: 0;
  }
}
.company-phones__img {
  margin-right: 9px;
  padding-top: 6px;
}
.company-phones__number-wrapper {
  display: flex;
  flex-direction: column;
}
</style>