<template>
  <div class="banner-bottom">
    <!-- TODO: v-for -->
    <div class="banner-bottom__wrapper banner-bottom__wrapper--service">
      <a href="#" class="banner-bottom__link">
        <span class="banner-bottom__text-wrapper">
          <span class="banner-bottom__section">Услуга</span>
          <span class="banner-bottom__title">Настройка электроники</span>
        </span>
      </a>
    </div>
    <div class="banner-bottom__wrapper banner-bottom__wrapper--blog">
      <a href="#" class="banner-bottom__link">
        <span class="banner-bottom__text-wrapper">
          <span class="banner-bottom__section">Блог</span>
          <span class="banner-bottom__title">Топ-5 лучших смартфонов</span>
        </span>
      </a>
    </div>
    <div class="banner-bottom__wrapper banner-bottom__wrapper--promo">
      <a href="#" class="banner-bottom__link">
        <span class="banner-bottom__text-wrapper">
          <span class="banner-bottom__section">Акция</span>
          <span class="banner-bottom__title"
            >Скидка 10% на любой товар по хэштегу</span
          >
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerBottom",
};
</script>

<style lang="scss" scoped>
.banner-bottom {
  display: flex;
  width: 100%;
  min-height: 275px;
}
.banner-bottom__wrapper {
  background-size: cover;
  background-position: center;
  &:hover {
    // TODO: fix scaling
    transform: scale(1.05);
    transition: transform 0.6s ease;
  }
  &--service {
    background-image: url("~assets/img/banner-bottom-electronics.jpg");
    flex-grow: 1;
  }
  &--blog {
    background-image: url("~assets/img/banner-bottom-phones.jpg");
    flex-grow: 1;
  }
  &--promo {
    background-image: url("~assets/img/banner-bottom-promo.jpg");
    flex-grow: 2;
  }
}
.banner-bottom__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }
}
.banner-bottom__text-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 33px 40px 34px;
  color: #ffffff;
}
// TODO: check font styles
.banner-bottom__section {
  margin-bottom: 11px;
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.7;
}
.banner-bottom__title {
  font-size: 1.3333em;
  line-height: 1.4em;
}
</style>