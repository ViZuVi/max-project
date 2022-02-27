<template>
  <v-navigation-drawer
    class="app-nav-drawer"
    :value="value"
    absolute
    temporary
    app
    @input="$emit('toggle-drawer', $event)"
  >
    <div class="app-nav-drawer__link app-nav-drawer__link--back" v-if="!isMainMenu" @click="$emit('nav-back')">
      <AppIcon symbol="icon_arrow_prev" className="app-nav-drawer__back-icon" />
      <span>Назад</span>
    </div>
    <div
      v-for="item in menuItems"
      :key="item.title"
      class="app-nav-drawer__item"
      :class="{
        'app-nav-drawer__item--main': isMainMenu,
        'app-nav-drawer__item--active': $route.path === item.link,
      }"
    >
      <nuxt-link
        v-if="!item.subMenu"
        :to="item.link"
        class="app-nav-drawer__link"
        :class="{ 'app-nav-drawer__link--main': isMainMenu }"
      >
        {{ item.title }}
      </nuxt-link>
      <button
        v-else
        class="app-nav-drawer__link"
        :class="{ 'app-nav-drawer__link--main': isMainMenu }"
        @click="$emit('show-submenu', item)"
      >
        {{ item.title }}
      </button>
      <AppIcon
        v-if="item.subMenu"
        symbol="icon_arrow_right"
        className="app-nav-drawer__icon"
      />
    </div>
  </v-navigation-drawer>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppNavDrawer",
  components: {
    AppIcon,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    isMainMenu: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    prevMenuItem: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.app-nav-drawer {
  display: flex;
  flex-direction: column;
}
.app-nav-drawer__item {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.app-nav-drawer__item--main.app-nav-drawer__item--active {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: $text-link-hover;
    width: 2px;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
  }
}
.app-nav-drawer__link {
  padding: 19px 46px 19px 20px;
  width: 100%;
  text-align: left;

  &--main {
    font-weight: bold;
  }

  &--back {
    border-bottom: 1px solid #f2f2f2;
  }
}
.app-nav-drawer__icon {
  position: absolute;
  z-index: 1;
  width: 46px;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-nav-drawer__back-icon {
  margin-right: 16px;
  color: $text-black-9;
}
</style>