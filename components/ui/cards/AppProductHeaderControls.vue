<template>
  <div class="product-card-controls">
    <AppButton
      label="Отложить"
      className="app-button--transparent product-card-controls__btn app-button--small"
      btnSymbol="icon_heart"
      iconClassName="product-card-controls__icon"
    />
    <AppButton
      label="Сравнить"
      className="app-button--transparent product-card-controls__btn app-button--small"
      btnSymbol="icon_diagram"
      iconClassName="product-card-controls__icon"
    />
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "AppProductHeaderControls",
  components: {
    AppButton,
  },
};
</script>

<style lang="scss">
.product-card-controls {
  display: flex;
  justify-content: space-between;
  margin-right: 38px;
  .product-card-controls__icon {
    order: -1;
    color: #999999;
    margin-right: 8px;
    display: flex;
  }
  .product-card-controls__btn {
    display: flex;
    margin-left: 0;
    border-color: #eeeeee;
    color: #333333;
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 8px;
    }
    &:hover {
      .product-card-controls__icon {
        color: #ffffff;
      }
    }
  }
}
</style>
