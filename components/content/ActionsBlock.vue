<template>
  <div class="actions-block">
    <button class="actions-block__btn">
      <AppIcon symbol="icon_callback" className="actions-block__icon" />
      <span class="actions-block__text font-small">Заказать звонок</span>
    </button>
    <button class="actions-block__btn">
      <AppIcon symbol="icon_ask_envelope" className="actions-block__icon" />
      <span class="actions-block__text font-small">Задать вопрос</span>
    </button>
    <button class="actions-block__btn">
      <AppIcon symbol="icon_dialog" className="actions-block__icon" />
      <span class="actions-block__text font-small">Оставить отзыв</span>
    </button>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "ActionsBlock",
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss" scoped>
.actions-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 2px;
  margin-bottom: 32px;
}
.actions-block__btn {
  display: flex;
  width: 100%;
  padding: 16px 20px;
  min-height: 58px;
  transition: transform ease 0.2s, box-shadow ease;
  &:not(:last-child) {
    border: $border;
    border-bottom: 0;
  }
  &:last-child {
    border: $border;
  }
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    border-color: #ffffff;
  }
}
.actions-block__icon {
  color: $text-link-hover;
  margin-right: 20px;
}
</style>