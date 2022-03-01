<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li
        v-for="menuItem in menuStatic"
        :key="menuItem.title"
        class="main-nav__item"
        @mouseover="activeMenuItem = menuItem.title"
        @mouseleave="activeMenuItem = null"
      >
        <nuxt-link class="main-nav__link" :to="`${menuItem.link}`">
          <AppIcon
            v-if="menuItem.icon"
            :symbol="menuItem.icon"
            className="main-nav__icon"
          />
          <span> {{ menuItem.title }}</span>
        </nuxt-link>
        <div
          class="main-nav__dropdown-menu"
          v-if="activeMenuItem === menuItem.title && menuItem.subMenu"
        >
          <div>
            <nuxt-link
              class="main-nav__dropdown-link"
              v-for="subItem in menuItem.subMenu"
              :key="subItem.title"
              :to="`${subItem.link}`"
            >
              {{ subItem.title }}
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import menuStatic from "./menu-static";

export default {
  name: "MainNav",
  components: {
    AppIcon,
  },
  data() {
    return {
      menuStatic,
      activeMenuItem: null,
    };
  },
};
</script>

<style lang="scss">
.main-nav {
  max-width: $max-width;
  margin: 0 auto;
  background-color: $text-link-hover;
  color: #ffffff;
  border-radius: 3px;
  height: 53px;
  .main-nav__list {
    display: flex;
    max-width: $max-width;
    max-height: 100%;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
  }
  @include adapt-mobile {
    display: none;
  }
}
.main-nav__item {
  position: relative;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    background-color: #5073e1;
  }

  .main-nav__link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 18px;
    height: 100%;

    &:hover {
      color: #ffffff;
    }
  }
}
.main-nav__icon {
  margin-right: 10px;
}
.main-nav__dropdown-menu {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 53px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  border-radius: 0 0 3px 3px;
  min-width: 160px;
  .main-nav__dropdown-link {
    padding: 14px 27px 13px 20px;
    text-transform: capitalize;
    font-size: 14px;
    color: $text-black-3;
    display: block;
    max-width: 200px;
    width: 100%;
    font-weight: normal;
    text-align: left;
    &:hover {
      color: $text-black-3;
      background-color: #fafafa;
    }
  }
}
</style>