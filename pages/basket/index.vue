<template>
  <div class="basket-page">
    <!-- TODO: layote with personal recomendations -->
    <div class="basket-page__header">
      <div class="basket-page__title-wrapper">
        <h1 class="basket-page__title">Корзина</h1>
        <nuxt-link class="basket-page__header-link" to="/catalog"
          >Вернуться в каталог</nuxt-link
        >
      </div>
      <div class="basket-page__header-actions">
        <button class="basket-page__header-btn">
          <AppIcon symbol="icon_download" className="basket-page__header-icon" />
          <span>Скачать файлом</span>
        </button>
        <button class="basket-page__header-btn">
          <AppIcon symbol="icon_print" className="basket-page__header-icon" />
          <span>Версия для печати</span>
        </button>
        <button class="basket-page__header-btn">
          <AppIcon symbol="icon_share" className="basket-page__header-icon" />
          <span>Поделиться корзиной</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss" scoped>
.basket-page {
  width: $max-width;
  margin: 0 auto;
  padding: 42px 30px 0;
}
.basket-page__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.basket-page__title {
  color: #333333;
  font-weight: normal;
  font-size: 2.133em;
  line-height: 1.126em;
  margin-bottom: 17px;
}
.basket-page__header-link {
  color: #999999;
  font-size: 0.867em;
  line-height: 1.692em;
  &:hover {
    color: #365edc;
  }
}
.basket-page__header-actions {
  display: flex;
  align-items: center;
}
.basket-page__header-btn {
  display: flex;
  align-items: center;
  color: #555555;
  font-size: 0.734em;
  text-transform: uppercase;
  line-height: 1.181em;
  letter-spacing: 0.08em;
  margin-right: 32px;
  height: 16px;
}
.basket-page__header-icon {
  margin-right: 10px;
  color: #B8B8B8;
}
</style>