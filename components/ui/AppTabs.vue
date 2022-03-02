<template>
  <div class="app-tabs font-small">
    <div
      class="app-tabs__item"
      :class="{ 'app-tabs__item--active': activeTab === tab }"
      v-for="tab in tabs"
      :key="tab"
      @click="onTabClick"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "app-tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeTab: this.tabs[0],
    };
  },
  methods: {
    onTabClick(e) {
      this.activeTab = e.target.innerText;
      this.$emit("click", this.activeTab);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-tabs {
  display: flex;
  margin-right: 65px;
  margin-left: auto;
  color: $text-black-6;
  @include adapt-mobile {
    margin-left: 0;
    font-size: 12px;
  }
}
.app-tabs__item {
  cursor: pointer;
  padding-bottom: 4px;
  &:not(:last-child) {
    margin-right: 26px;
    @include adapt-mobile {
      margin-right: 8px;
    }
  }
  &--active {
    border-bottom: 2px solid $text-link-hover;
    cursor: text;
    color: $text-black-3;
  }
}
</style>