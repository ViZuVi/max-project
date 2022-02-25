<template>
  <div class="subscribe-block">
    <div class="subscribe-block__main">
      <AppIcon symbol="icon_subscribe_big" className="subscribe-block__icon" />
      <span class="subscribe-block__text"
        >Будьте в курсе наших акций и новостей</span
      >
    </div>
    <!-- TODO: move app-button__transparent to cpmponent (prop transparent) -->
    <AppButton
      label="Подписаться"
      className="app-button--transparent subscribe-block__btn"
    />
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "SubscribeBlock",
  components: {
    AppIcon,
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.subscribe-block {
  text-align: center;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  border: $border;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);

    .subscribe-block__btn {
      background-color: $text-link-hover;
      color: #ffffff;
    }
  }
}
.subscribe-block__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px 0;
}
.subscribe-block__icon {
  color: $text-link-hover;
  margin-bottom: 12px;
}
.subscribe-block__text {
  padding-bottom: 20px;
  border-bottom: $border;
}
.subscribe-block__btn {
  width: 100%;
  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 16px 26px 16px;
  color: inherit;
}
</style>
