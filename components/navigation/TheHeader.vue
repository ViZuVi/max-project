<template>
  <header class="app-header" :class="{ 'app-header--short': short }">
    <div class="app-header__navigation">
      <UserNav @show-menu-drawer="showMenuDrawer = true" />
      <MainNav v-show="!isMobile" />
      <AppNavDrawer
        :menuItems="menuItems"
        :value="showMenuDrawer"
        :isMainMenu="isMainMenu"
        :prevMenuItem="prevMenuItem"
        @toggle-drawer="showMenuDrawer = $event"
        @show-submenu="showSubmenu"
        @nav-back="navBack"
      />
    </div>
  </header>
</template>

<script>
import AppNavDrawer from "~/components/ui/AppNavDrawer";
import UserNav from "./UserNav";
import MainNav from "./MainNav";
import menuItems from "./menu-static";

export default {
  name: "TheHeader",
  components: {
    AppNavDrawer,
    UserNav,
    MainNav,
  },
  props: {
    short: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    isMobile: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      menuItems,
      showMenuDrawer: false,
      isMainMenu: true,
      prevMenuItem: null,
    };
  },
  methods: {
    showSubmenu(e) {
      this.prevMenuItem = e;
      this.isMainMenu = false;
      this.menuItems = e.subMenu;
    },
    navBack() {
      this.menuItems = menuItems;
      this.isMainMenu = true;
      this.prevMenuItem = null;
    }
  },
};
</script>

<style lang="scss">
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  @include adapt-mobile {
    height: 60px;
  }

  &--short {
    position: relative;

    .app-header__navigation {
      max-width: none;
      padding: 0;
    }
    .main-nav {
      max-width: none;
      width: 100%;
      border-radius: 0px;
    }
    .main-nav__list {
      max-width: $max-width;
      margin: 0 auto;
    }
  }
}
.app-header__navigation {
  max-width: $max-width;
  margin: 0 auto;

  @include adapt-mobile {
    border-bottom: $border;
    height: 60px;
  }
}
</style>