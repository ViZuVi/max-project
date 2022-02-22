<template>
  <header class="app-header" :class="{ 'app-header--short': short }">
    <div class="app-header__navigation">
      <v-main>
        <UserNav />
        <MainNav />
      </v-main>
    </div>
  </header>
</template>

<script>
import UserNav from "./UserNav";
import MainNav from "./MainNav";

export default {
  name: "TheHeader",
  components: {
    UserNav,
    MainNav,
  },
  props: {
    short: {
      type: Boolean,
      required: false,
      default: () => false,
    },
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
  padding: 0 30px;
}
</style>