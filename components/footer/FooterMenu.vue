<template>
  <div class="footer-menu">
    <div class="footer-menu__wrapper">
      <nuxt-link
        class="footer-menu__link footer-menu__link--short"
        v-for="menuItem in menu.short"
        :key="menuItem.title"
        :to="menuItem.link"
        >{{ menuItem.title }}</nuxt-link
      >
    </div>
    <div
      class="footer-menu__wrapper footer-menu__wrapper--full"
      v-for="menuItem in menu.full"
      :key="menuItem.title"
    >
      <div class="footer-menu__link-wrapper">
        <nuxt-link class="footer-menu__link" :to="menuItem.link">
          {{ menuItem.title }}
        </nuxt-link>
        <AppIcon
          symbol="icon_footer_arrow"
          class="footer-menu__link-arrow"
          :class="{
            'footer-menu__link-arrow--active': activeSubmenu.includes(
              menuItem.link
            ),
          }"
          @click="toggleSubmenu(menuItem.link)"
        />
      </div>
      <div
        class="footer-menu__sub"
        :class="{
          'footer-menu__sub--active': activeSubmenu.includes(menuItem.link),
        }"
      >
        <nuxt-link
          class="footer-menu__sub-link"
          v-for="subItem in menuItem.subMenu"
          :key="subItem.tittle"
          :to="subItem.link"
        >
          {{ subItem.title }}
        </nuxt-link>
      </div>
    </div>
    <div class="footer-menu__wrapper footer-menu__wrapper--contacts">
      <AppButton
        label="Подписаться на рассылку"
        className="app-button--transparent footer-menu__subscribe-btn"
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
      <div
        class="
          footer-menu__contacts-wrapper footer-menu__contacts-wrapper--address
        "
      >
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
      activeSubmenu: [],
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
  methods: {
    toggleSubmenu(e) {
      if (this.activeSubmenu.includes(e)) {
        const index = this.activeSubmenu.indexOf(e);
        console.log(index);
        this.activeSubmenu.splice(index, 1);
      } else {
        this.activeSubmenu.push(e);
      }
    },
  },
};
</script>

<style lang="scss">
.footer-menu {
  max-width: $max-width;
  padding: 0 30px 70px;
  margin: 0 auto;
  display: flex;
  @include adapt-mobile {
    flex-direction: column;
    padding: 0;
  }
  .footer-menu__link {
    color: #ffffff;
    font-size: 0.867em;
    font-weight: 700;
    line-height: 1.5385em;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    &--short:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      opacity: 0.5;
      color: #ffffff;
    }
    @include adapt-mobile {
      margin-bottom: 0;
      &--short {
        padding: 15px 16px;
        border-bottom: 1px solid #434343;
        margin-top: -1px;
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
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

    &:hover:not(.footer-menu__contacts-wrapper--address) {
      color: #ffffff;
      opacity: 0.5;
    }
  }
}
.footer-menu__wrapper {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  padding: 0 16px;

  @include adapt-mobile {
    padding: 0;

    &--full {
      border-top: 1px solid #434343;
      border-bottom: 1px solid #434343;
      margin-top: -1px;
      padding: 15px 16px;
    }

    &--contacts {
      padding-left: 36px;
      padding-right: 36px;
    }
  }

  .footer-menu__subscribe-btn {
    margin-bottom: 35px;
    margin-left: 0;
    padding: 14px 18px;
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

      .footer-menu__subscribe-icon {
        opacity: 1;
      }
    }

    .app-button__label {
      margin-right: 38px;
    }

    @include adapt-mobile {
      margin: 40px 0 35px;
      width: auto;
      .app-button__label {
        line-height: 1.428571429;
        margin-right: 0;
      }
    }
  }
  .footer-menu__subscribe-icon {
    display: flex;
    opacity: 0.35;
    svg {
      opacity: 0.35;
    }
  }
}
.footer-menu__sub {
  display: flex;
  flex-direction: column;

  @include adapt-mobile {
    display: none;
    margin-top: 20px;
    &--active {
      display: flex;
    }
  }
}
.footer-menu__link-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @include adapt-mobile {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    .footer-menu__link {
      border: 0;
      padding: 0;
    }
  }
}

.footer-menu__link-arrow {
  display: none;
  color: #ffffff;
  transition: transform 0.2s ease-in-out;
  transform: rotate(-180deg);
  &--active {
    transform: none;
  }
  @include adapt-mobile {
    display: block;
  }
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
  @include adapt-mobile {
    align-self: center;
    text-align: center;
    margin-bottom: 40px;
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
    right: 84px;
    left: unset;
    top: -2px;
    @include adapt-mobile {
      right: 0;
      left: unset;
    }
  }
}
</style>