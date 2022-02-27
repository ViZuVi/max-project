<template>
  <div class="bottom-nav">
    <nuxt-link
      class="bottom-nav__item"
      v-for="item in menuItems"
      :to="item.link"
      :key="item.link"
    >
      <AppIcon :symbol="item.icon" className="bottom-nav__item-img" />
      <span class="bottom-nav__title">{{ item.title }}</span>
      <span class="bottom-nav__cart-quantity" v-if="item.link === '/cart'">{{
        productsQuantity
      }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppIcon from "~/components/ui/AppIcon";
import menuItems from "./bottom-nav-static";

export default {
  name: "BottomNavPanel",
  components: {
    AppIcon,
  },
  data() {
    return {
      menuItems,
    };
  },
  computed: {
    ...mapGetters("cart", ["productsQuantity"]),
  },
};
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #ffffff;
  overflow-x: auto;
  box-shadow: 0 -2px 8px rgb(0 0 0 / 15%);
  z-index: 1;
}
.bottom-nav__item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 75px;
  max-width: 200px;
  height: 62px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 3px 1px;
}
.bottom-nav__item-img {
  color: $text-black-9;
  margin-bottom: 3px;
}
.bottom-nav__title {
  font-size: 0.667em;
  line-height: 1.3em;
}
.bottom-nav__cart-quantity {
  position: absolute;
  top: 5px;
  right: 18px;
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