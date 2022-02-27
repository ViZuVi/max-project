<template>
  <div class="footer-copy">
    <div class="footer-copy__item footer-copy__item--text">
      2022 © Все права защищены
    </div>
    <div class="footer-copy__item footer-copy__item--pay">
      <AppIcon
        v-for="(icon, i) in icons"
        :symbol="icon"
        :key="i"
        className="footer-copy__text-icon"
      />
    </div>
    <a
      href="https://aspro.ru/"
      target="_blank"
      class="footer-copy__item footer-copy__item--developed"
    >
      <span class="footer-copy__developed-text"> Разработано в </span>
      <AppIcon symbol="icon_aspro" />
    </a>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "FooterCopy",
  components: {
    AppIcon,
  },
  data() {
    return {
      // TODO: from api store?
      icons: ["icon_mastercard", "icon_mastercard", "icon_mastercard"],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: $max-width;
  margin: 0 auto;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.footer-copy__item {
  color: $text-black-9;

  &--text {
    font-size: 0.867em;
    line-height: 1.692em;
  }

  &--developed {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @include adapt-mobile {
    margin: 16px;
  }
}
.footer-copy__developed-text {
  font-size: 0.8em;
  line-height: 1.7;
  margin-right: 15px;
  &:hover {
    color: #ffffff;
  }
}
.footer-copy__text-icon {
  filter: grayscale(1);
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    filter: grayscale(0);
  }
}
</style>