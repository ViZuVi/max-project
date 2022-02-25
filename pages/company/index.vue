<template>
  <div class="company">
    <h1 class="company__page-title">О компании</h1>
    <AppBreadcrumbs
      :items="[
        { title: 'Главная', link: '/' },
        { title: 'О компании', link: '/company' },
      ]"
    />
    <div class="company__main">
      <div class="company__sidebar-wrapper">
        <AppSideNav :items="menu.subMenu" />
        <nuxt-link :to="'/link'">
          <img
            class="company__banner"
            src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
            alt=""
          />
        </nuxt-link>
        <SubscribeBlock />
      </div>
      <div class="page-content" v-html="contentStatic"></div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "~/components/ui/AppBreadcrumbs";
import AppSideNav from "~/components/ui/AppSideNav";
import SubscribeBlock from "~/components/content/SubscribeBlock";
import menuStatic from "~/components/navigation/menu-static";
import contentStatic from "./content-static";

export default {
  components: {
    AppBreadcrumbs,
    AppSideNav,
    SubscribeBlock,
  },
  // TODO: change layout names
  layout: "cart",
  data() {
    return {
      contentStatic,
    };
  },
  computed: {
    menu() {
      return menuStatic.find((item) => item.link === "/company");
    },
  },
};
</script>

<style lang="scss" scoped>
.company {
  width: $max-width;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: $tablet-width) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.company__page-title {
  padding-top: 42px;
  padding-bottom: 15px;
}
.company__sidebar-wrapper {
  width: 244px;
  @media (max-width: $tablet-width) {
    display: none;
  }
}
.company__main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.company__banner {
  margin-bottom: 32px;
}
</style>