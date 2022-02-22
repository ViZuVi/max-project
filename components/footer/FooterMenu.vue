<template>
  <div class="footer-menu">
    <div class="footer-menu__wrapper">
      <nuxt-link
        class="footer-menu__link"
        v-for="menuItem in menu.short"
        :key="menuItem.title"
        :to="menuItem.link"
        >{{ menuItem.title }}</nuxt-link
      >
    </div>
    <div
      class="footer-menu__wrapper"
      v-for="menuItem in menu.full"
      :key="menuItem.title"
    >
      <nuxt-link class="footer-menu__link" :to="menuItem.link">{{
        menuItem.title
      }}</nuxt-link>
      <div class="footer-menu__sub">
        <nuxt-link
          class="footer-menu__sub-link"
          v-for="subItem in menuItem.subMenu"
          :key="subItem.tittle"
          :to="subItem.link"
          >{{ subItem.title }}</nuxt-link
        >
      </div>
    </div>
    <div class="footer-menu__wrapper">
      <!-- TODO: fix button -->
      <AppButton
        label="Подписаться на рассылку"
        className="transparant footer-menu__subscribe-btn"
        btnSymbol="icon_subscribe"
        iconClassName="footer-menu__subscribe-icon"
      />
      <!-- TODO: to UI -->
      <div class="footer-menu__contacts-wrapper">
        <AppIcon className="footer-menu__contacts-icon" symbol="icon_phone" />
        <a
          href="tel:+70000000000"
          class="footer-menu__contacts-link footer-menu__contacts-link--phone"
          >+7 (000) 000-00-00</a
        >
        <AppIcon
          className="footer-menu__contacts-icon footer-menu__contacts-icon--dropdown"
          symbol="icon_dropdown"
        />
        <span class="footer-menu__callback">Заказать звонок</span>
      </div>
      <div class="footer-menu__contacts-wrapper">
        <AppIcon className="footer-menu__contacts-icon" symbol="icon_mail" />
        <a class="footer-menu__contacts-link" href="mailto:info@msk.max-demo.ru"
          >info@msk.max-demo.ru</a
        >
      </div>
      <div class="footer-menu__contacts-wrapper">
        <AppIcon className="footer-menu__contacts-icon" symbol="icon_pin" />
        <span>Москва, ул. Пушкина 21, 3 этаж, офис 4</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";
import AppIcon from "~/components/ui/AppIcon";
import menuStatic from "./footer-static";

export default {
  name: "FooterMenu",
  components: {
    AppButton,
    AppIcon,
  },
  data() {
    return {
      menuStatic,
    };
  },
  computed: {
    menu() {
      return {
        short: menuStatic.filter((item) => !item.subMenu),
        full: menuStatic.filter((item) => item.subMenu),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-menu {
  max-width: $max-width;
  padding: 0 30px 70px;
  margin: 0 auto;
  display: flex;
}
.footer-menu__wrapper {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  padding: 0 16px;

  .footer-menu__subscribe-btn {
    margin-bottom: 35px;
    margin-left: 0;
    padding: 15px 45px 14px 18px;
    background-color: #494949;
    color: #ffffff;
    border-color: #494949;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7333em;
    &:hover {
      border-color: #365edc;
    }
  }
  .footer-menu__subscribe-icon {
    opacity: 0.35;
  }
}
.footer-menu__sub {
  display: flex;
  flex-direction: column;
}
.footer-menu__link {
  color: #ffffff;
  font-size: 0.867em;
  font-weight: 700;
  line-height: 1.5385em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    opacity: 0.5;
  }
}
.footer-menu__sub-link {
  color: #999999;
  font-size: 0.867em;
  line-height: 1.5385em;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    color: #999999;
  }
}
.footer-menu__contacts-wrapper,
.footer-menu__contacts-link {
  color: #ffffff;
  line-height: 25px;
  font-size: 15px;
}
.footer-menu__contacts-wrapper {
  display: flex;
  flex-direction: column;
  padding-left: 29px;
  padding-right: 20px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
}
.footer-menu__contacts-link {
  &--phone {
    font-size: 1.0667em;
  }
}
.footer-menu__callback {
  font-size: 0.6667em;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #999;
}
.footer-menu__contacts-icon {
  position: absolute;
  opacity: 0.5;
  left: 3px;
  top: 2px;

  &--dropdown {
    // TODO: check right
    right: 84px;
    left: unset;
    top: -2px;
  }
}
</style>