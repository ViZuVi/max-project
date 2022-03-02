<template>
  <nav class="user-nav">
    <AppIcon
      symbol="icon_burger"
      className="user-nav__burger-icon"
      @click.stop="$emit('show-menu-drawer')"
    />
    <nuxt-link class="user-nav__logo" to="/">
      <AppIcon symbol="icon_logo" className="user-nav__logo-icon" />
    </nuxt-link>
    <span class="user-nav__site-description">
      Интернет-магазин представительского класса
    </span>

    <v-dialog class="cities-modal" v-model="showCities" width="900">
      <template v-slot:activator="{ on, attrs }">
        <button class="user-nav__city-btn" v-on="on" v-bind="attrs">
          <span>Москва</span>
          <AppIcon symbol="icon_dropdown" className="user-nav__dropdown-icon" />
        </button>
      </template>
      <CitiesModal @close-modal="showCities = false" />
    </v-dialog>

    <div class="user-nav__phones-wrapper" @mouseover.stop="showPhones = true">
      <AppIcon class="user-nav__phone-icon" symbol="icon_header_phone" />
      <a class="user-nav__phone-main" href="tel:+70000000000">
        <span class="user-nav__phone-text">+7 (000) 000-00-00</span>
        <AppIcon symbol="icon_dropdown" className="user-nav__dropdown-icon" />
      </a>
    </div>
    <div>
      <button class="user-nav__callback">Заказать звонок</button>
    </div>
    <div class="user-nav__auth-wrapper">
      <button class="user-nav__main-button">
        <!-- TODO: search modal -->
        <AppIcon symbol="icon_search" className="user-nav__main-icon" />
        <span class="user-nav__icon-label">Поиск</span>
      </button>
      <button class="user-nav__main-button">
        <AppIcon symbol="icon_auth" className="user-nav__main-icon" />
        <span class="user-nav__icon-label">Войти</span>
      </button>
    </div>
    <CompanyPhones v-show="showPhones" @close-phones="showPhones = false" />
    <nuxt-link class="user-nav__cart-link" to="/cart">
      <AppIcon symbol="icon_cart_small" className="user-nav__cart-icon" />
      <span class="user-nav__cart-quantity">{{ productsQuantity }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import AppIcon from "~/components/ui/AppIcon";
import CompanyPhones from "./CompanyPhones";
import CitiesModal from "./CitiesModal";

export default {
  name: "UserNav",
  components: {
    AppIcon,
    CompanyPhones,
    CitiesModal,
  },
  data() {
    return {
      showPhones: false,
      showCities: false,
    };
  },
  computed: {
    ...mapGetters("cart", ["productsQuantity"]),
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
  padding-left: 30px;
  padding-right: 30px;
  @include adapt-mobile {
    min-height: 100%;
    padding: 0;
    background-color: #ffffff;
  }
}
.user-nav__burger-icon {
  display: none;
  @include adapt-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 62px;
  }
}
.user-nav__logo {
  margin-right: 30px;
  display: block;
  @include adapt-mobile {
    height: 100%;
    margin-right: auto;
  }
}
.user-nav__logo-icon {
  svg {
    @include adapt-mobile {
      width: 112px;
      height: 30px;

      margin-right: 5px;
    }
  }
}
.user-nav__city-btn {
  position: relative;
  margin-right: 25px;
  padding-right: 10px;
  font-size: 0.867em;
  line-height: 20px;
  color: #333333;
  &:hover {
    color: $text-link-hover;
  }
  @include adapt-mobile {
    display: none;
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
  @include adapt-mobile {
    display: none;
  }
}
.user-nav__phones-wrapper {
  padding-right: 15px;
  position: relative;

  @include adapt-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0;
  }

  .user-nav__phone-main {
    position: relative;
    color: #333333;
    font-size: 1.0666em;
    line-height: 25px;
    font-weight: bold;
    padding-right: 10px;

    @include adapt-mobile {
      .user-nav__phone-text,
      .user-nav__dropdown-icon {
        display: none;
      }
    }
  }

  .user-nav__phone-icon {
    display: none;
    opacity: 0.5;
    &:hover {
      color: $text-link-hover;
      opacity: 1;
    }

    @include adapt-mobile {
      display: block;
    }
  }
}
.user-nav__phone-img {
  margin-right: 10px;
}
.user-nav__callback {
  margin: 0 0 0 13px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: $text-link-hover;
  &:hover {
    color: #333333;
  }
  @include adapt-mobile {
    display: none;
  }
}
.user-nav__auth-wrapper {
  margin-left: auto;
  display: flex;
  padding-left: 9px;
  @include adapt-mobile {
    margin-left: 0;
  }
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
    @include adapt-mobile {
      margin-left: 14px;
    }
  }

  &:hover {
    color: $text-link-hover;
    .user-nav__main-icon {
      opacity: 1;
    }
  }
}
.user-nav__main-icon {
  margin-right: 9px;
  opacity: 0.5;
}
.user-nav__icon-label {
  @include adapt-mobile {
    display: none;
  }
}
.user-nav__cart-link {
  margin-right: 17px;
  display: none;
  position: relative;
  @include adapt-mobile {
    display: block;
  }
}
.user-nav__cart-icon {
  opacity: 0.5;
}
.user-nav__cart-quantity {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 16px;
  height: 15px;
  line-height: 17px;
  font-size: 0.667em;
  text-align: center;
  background-color: $text-link-hover;
  border-radius: 50%;
  color: #ffffff;
}
</style>