<template>
  <div class="app-product-tags">
    <div
      class="app-product-tag"
      :class="tagClassName"
      v-for="tag in tags"
      :key="tag.id"
      :style="{ backgroundColor: tag.color }"
    >
      {{ tag.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProductTag",
  props: {
    tags: {
      type: Array,
      required: true,
      default: () => [],
    },
    tagClassName: {
      type: String,
      required: false,
      default: () => "",
    }
  },
};
</script>

<style lang="scss" scoped>
.app-product-tag {
  position: absolute;
  left: 0;
  top: 0;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: 0.8em;
  line-height: 1.692em;
  background-color: #ffffff;
  &:not(:last-child) {
    margin-right: 4px;
  }
}
</style>