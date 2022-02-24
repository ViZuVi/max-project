<template>
  <nav class="user-nav">
    <nuxt-link class="user-nav__logo" to="/">
      <AppIcon symbol="icon_logo" className="user-nav__logo-icon" />
    </nuxt-link>
    <span class="user-nav__site-description">
      Интернет-магазин представительского класса
    </span>
    <!-- TODO: add modal -->
    <button class="user-nav__city-btn">
      <span>Москва</span>
      <AppIcon symbol="icon_dropdown" className="user-nav__dropdown-icon" />
    </button>
    <div class="user-nav__phones-wrapper">
      <a class="user-nav__phone-main" href="tel:+70000000000">
        <span>+7 (000) 000-00-00</span>
        <AppIcon symbol="icon_dropdown" className="user-nav__dropdown-icon" />
      </a>
      <div class="user-nav__phones-block">
        <a class="user-nav__phone" href="tel:+70000000000">
          <img
            class="user-nav__phone-img"
            :src="require('~/assets/img/beeline.svg')"
            alt=""
          />
          <span>+7 (000) 000 00 00</span></a
        >
        <a class="user-nav__phone" href="tel:+70000000006">
          <img
            class="user-nav__phone-img"
            :src="require('~/assets/img/megafon.svg')"
            alt=""
          />
          <span>+7 (000) 000 00 06</span>
          <span class="user-nav__phone-description">Бухгалтерия</span>
        </a>
      </div>
    </div>
    <div>
      <button class="user-nav__callback">Заказать звонок</button>
    </div>
    <div class="user-nav__auth-wrapper">
      <button class="user-nav__main-button">
        <AppIcon symbol="icon_search" className="user-nav__main-icon" />
        <span>Поиск</span>
      </button>
      <button class="user-nav__main-button">
        <AppIcon symbol="icon_auth" className="user-nav__main-icon" />
        <span>Войти</span>
      </button>
    </div>
  </nav>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "UserNav",
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss">
.user-nav {
  max-width: $max-width;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 82px;
}
.user-nav__logo {
  margin-right: 30px;
}
.user-nav__city-btn {
  position: relative;
  margin-right: 25px;
  padding-right: 10px;
  font-size: 0.867em;
  line-height: 20px;
  color: #333333;
  &:hover {
    color: #365edc;
  }
}
.user-nav__dropdown-icon {
  position: absolute;
  right: 0;
  bottom: 2px;
}
.user-nav__site-description {
  color: #333333;
  max-width: 200px;
  font-size: 0.867em;
  line-height: 20px;
  opacity: 0.6;
  margin-right: 77px;
}
.user-nav__phones-wrapper {
  padding-right: 15px;
  position: relative;

  .user-nav__phone-main {
    position: relative;
    color: #333333;
    font-size: 1.0666em;
    line-height: 25px;
    font-weight: bold;
    padding-right: 10px;
  }

  &:hover {
    .user-nav__phones-block {
      display: block;
    }
  }
}
.user-nav__phones-block {
  display: none;
  background-color: #ffffff;
  position: absolute;
  left: -43px;
  top: -20px;
  max-width: 245px;
  min-width: 198px;
  max-height: 500px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 3px;

  .user-nav__phone {
    display: block;
    padding: 18px 22px 18px;
    color: #222222;
    font-size: 1.0666em;
    line-height: 25px;
    font-weight: bold;
    white-space: nowrap;

    &:not(:first-child) {
      border-top: 1px solid #f2f2f2;
    }
  }
}
.user-nav__phone-description {
  color: #999999;
  display: block;
  font-size: 0.8em;
  font-weight: 400;
  padding-top: 6px;
}
.user-nav__phone-img {
  margin-right: 10px;
}
.user-nav__callback {
  margin: 0 0 0 13px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #365edc;
  &:hover {
    color: #333333;
  }
}
.user-nav__auth-wrapper {
  margin-left: auto;
  display: flex;
  padding-left: 9px;
}
.user-nav__main-button {
  color: #333333;
  font-size: 0.6667em;
  line-height: 1.2em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-left: 50px;
  }

  &:hover {
    color: #365edc;
    .user-nav__main-icon {
      opacity: 1;
    }
  }
}
.user-nav__main-icon {
  margin-right: 9px;
  opacity: 0.5;
}
</style>