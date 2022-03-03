<template>
  <!-- TODO: static - change -->
  <div class="app-sale-timer">
    <AppIcon symbol="icon_clock" class="app-sale-timer__icon" />
    <span class="app-sale-timer__item app-sale-timer__item--days">
      <span class="app-sale-timer__value font-small">02</span>
      <span class="app-sale-timer__title">дн</span>
    </span>
    <span class="app-sale-timer__item app-sale-timer__item--hours">
      <span class="app-sale-timer__value font-small">02</span>
      <span class="app-sale-timer__title">час</span>
    </span>
    <span class="app-sale-timer__item app-sale-timer__item--minutes">
      <span class="app-sale-timer__value font-small">02</span>
      <span class="app-sale-timer__title">мин</span>
    </span>
    <span class="app-sale-timer__item app-sale-timer__item--quantity">
      <span class="app-sale-timer__value font-small">7000</span>
      <span class="app-sale-timer__title">шт.</span>
    </span>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppSaleTimer",
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss" scoped>
.app-sale-timer {
  border: $border;
  margin-bottom: 9px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  padding: 10px 13px;
}
.app-sale-timer__icon {
  margin-right: 16px;
  width: 20px;
  height: 20px;
  color: #f94435;
}
.app-sale-timer__item {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  position: relative;

  &--days,
  &--hours {
    &::before,
    &::after {
      content: "";
      position: absolute;
      right: -10px;
      background-color: $text-black-3;
      width: 2px;
      height: 2px;
    }
    &::before {
      top: 33%;
    }
    &::after {
      bottom: 33%;
    }
  }

  &--quantity::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 33%;
    height: 12px;
    border-left: $border;
  }
}
.app-sale-timer__value {
  font-weight: bold;
}
.app-sale-timer__title {
  font-size: 0.6667em;
  line-height: 1.2;
  color: $text-black-6;
  margin-top: -3px;
}
</style>