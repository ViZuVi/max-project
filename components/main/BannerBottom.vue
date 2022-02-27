<template>
  <div class="banner-bottom">
    <div class="banner-bottom__wrapper banner-bottom__wrapper--service">
      <nuxt-link to="#" class="banner-bottom__link"> </nuxt-link>
      <nuxt-link to="#" class="banner-bottom__text-wrapper">
        <span class="banner-bottom__section font-upper">Услуга</span>
        <span class="banner-bottom__title font-large"
          >Настройка электроники</span
        >
      </nuxt-link>
    </div>
    <div class="banner-bottom__wrapper banner-bottom__wrapper--blog">
      <nuxt-link to="#" class="banner-bottom__link"> </nuxt-link>
      <nuxt-link to="#" class="banner-bottom__text-wrapper">
        <span class="banner-bottom__section font-upper">Блог</span>
        <span class="banner-bottom__title font-large"
          >Топ-5 лучших смартфонов</span
        >
      </nuxt-link>
    </div>
    <div class="banner-bottom__wrapper banner-bottom__wrapper--promo">
      <nuxt-link to="#" class="banner-bottom__link"> </nuxt-link>
      <nuxt-link to="#" class="banner-bottom__text-wrapper">
        <span class="banner-bottom__section font-upper">Акция</span>
        <span class="banner-bottom__title font-large">
          Скидка 10% на любой товар по хэштегу
        </span>
      </nuxt-link>
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
  flex-wrap: wrap;
}
.banner-bottom__wrapper {
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;

  &--service {
    width: 25%;
    @include adapt-mobile {
      width: 50%;
    }
    .banner-bottom__link {
      background-image: url("~assets/img/banner-bottom-electronics.jpg");
    }
  }
  &--blog {
    width: 25%;
    @include adapt-mobile {
      width: 50%;
    }
    .banner-bottom__link {
      background-image: url("~assets/img/banner-bottom-phones.jpg");
    }
  }
  &--promo {
    width: 50%;
    @include adapt-mobile {
      width: 100%;
    }
    .banner-bottom__link {
      background-image: url("~assets/img/banner-bottom-promo.jpg");
    }
  }

  &:hover {
    .banner-bottom__link {
      transform: scale(1.05);
      &::before {
        opacity: 1;
      }
    }
  }
}
.banner-bottom__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.6s ease;
  position: relative;
  &::before {
    content: "";
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    opacity: 0;
  }
}
.banner-bottom__text-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 33px 40px 34px;
  color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    color: #ffffff;
  }
}
.banner-bottom__section {
  opacity: 0.7;
}
</style>