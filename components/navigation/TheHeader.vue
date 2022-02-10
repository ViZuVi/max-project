<template>
  <header class="app-header">
    <div class="app-header__navigation">
      <UserNav />
      <MainNav />
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
  margin: 0 auto;
  background-image: url("../../assets/img/header-background.jpg");
  min-height: 631px;
}
.app-header__navigation {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 30px;
}
</style>