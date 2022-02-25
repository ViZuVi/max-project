<template>
  <div class="app-breadcrumbs">
    <nuxt-link
      class="app-breadcrumbs__link font_small"
      v-for="(item, i) in items"
      :key="item.title"
      :to="item.link"
    >
      <span class="app-breadcrumbs__title">{{ item.title }}</span>
      <span class="app-breadcrumbs__divider" v-if="i < items.length - 1"
        >—</span
      >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "AppBreadcrumbs",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumbs {
  margin-bottom: 40px;
}
.app-breadcrumbs__link {
  color: #b6b5b5;

  &:hover {
    &:not(:last-child) {
      color: $text-link-hover;
    }
  }

  &:last-child {
    pointer-events: none;
  }
}
.app-breadcrumbs__divider {
  margin-right: 10px;
  margin-left: 9px;
}
</style>