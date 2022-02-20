<template>
  <div class="app-tabs">
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
  font-size: 0.867em;
  line-height: 1.692em;
  color: #666666;
}
.app-tabs__item {
  cursor: pointer;
  padding-bottom: 4px;
  &:not(:last-child) {
    margin-right: 26px;
  }
  &--active {
    border-bottom: 2px solid #365edc;
    // outline: ;
    cursor: text;
  }
}
</style>