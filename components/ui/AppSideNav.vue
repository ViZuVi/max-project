<template>
  <nav class="app-side-nav">
    <nuxt-link
      class="app-side-nav__link"
      v-for="item in items"
      :key="item.title"
      :to="item.link"
    >
      <span>{{ item.title }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "AppSideNav",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.app-side-nav {
  display: flex;
  flex-direction: column;
  border: $border;
  width: 244px;
  margin-bottom: 26px;
  .app-side-nav__link {
    padding: 15px 30px 17px 15px;
    border-radius: 2px;
    font-size: 13px;
    color: $text-black-3;
    &:not(:last-child) {
      border-bottom: $border;
    }
    &:first-child {
      font-weight: bold;
    }
    &:hover {
      color: $text-black-3;
    }
  }
}
</style>