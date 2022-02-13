<template>
  <div class="section-title">
    <h2 class="section-title__name">{{ title }}</h2>
    <slot></slot>
    <a class="section-title__link" :href="allLink">{{ allName }}</a>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
      default: () => "",
    },
    allName: {
      type: String,
      required: true,
      default: () => "",
    },
    allLink: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  width: 100%;
  color: #333333;
  margin-bottom: 33px;
}
.section-title__name {
  @include section-title;
  margin-right: auto;
}
.section-title__link {
  color: #999999;
  @include font-small-uppercase;
  &:hover {
    color: #007aff;
  }
}
</style>