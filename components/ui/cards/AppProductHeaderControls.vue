<template>
  <div class="product-card-controls">
    <AppButton
      label="Отложить"
      className="product-card-controls__btn app-button--small"
      btnSymbol="icon_heart"
      iconClassName="product-card-controls__icon"
    />
    <AppButton
      label="Сравнить"
      className="product-card-controls__btn app-button--small"
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
    color: $text-black-9;
    margin-right: 8px;
    display: flex;
  }
  .product-card-controls__btn {
    display: flex;
    margin-left: 0;
    border-color: #eeeeee;
    color: $text-black-3;
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
