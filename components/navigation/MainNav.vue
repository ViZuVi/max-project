<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <!-- TODO: v-for -->
      <li
        v-for="menuItem in menuStatic"
        :key="menuItem.title"
        class="main-nav__item"
      >
        {{ menuItem.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
import menuStatic from "./menu-static";

export default {
  name: "MainNav",
  data() {
    return {
      menuStatic,
    };
  },
};
</script>

<style lang="scss">
.main-nav {
  background-color: #365edc;
  color: #ffffff;
  border-radius: 3px;
}
.main-nav__list {
  display: flex;
}
.main-nav__item {
  padding: 18px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    background-color: #5073e1;
  }
}
</style>