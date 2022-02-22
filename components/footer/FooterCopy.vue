<template>
  <div class="footer-copy">
    <div class="footer-copy__text">2022 © Все права защищены</div>
    <div class="footer-copy__pay">
      <!-- TODO: add icons from sprite -->
      <!-- <AppIcon v-for="icon in icons" :symbol="icon" :key="icon" /> -->
    </div>
    <a href="https://aspro.ru/" target="_blank" class="footer-copy__developed">
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
      icons: ["icon_cash"],
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
}
.footer-copy__text {
  color: #999999;
  font-size: 0.867em;
  line-height: 1.692em;
}
.footer-copy__developed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
}
.footer-copy__developed-text {
  font-size: 0.8em;
  line-height: 1.7;
  margin-right: 15px;
}
</style>