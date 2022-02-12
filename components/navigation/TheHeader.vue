<template>
  <header class="app-header">
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
}
.app-header__navigation {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 30px;
}
</style>