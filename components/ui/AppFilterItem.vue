<template>
  <div class="app-filter-item">
    <button class="app-filter-item__btn" @click="isOpened = !isOpened">
      <!-- TODO: emit opening and close other filters when one opened -->
      <span>{{ name }}</span>
      <AppIcon
        v-if="hasDropdownIcon"
        symbol="icon_dropdown"
        :className="
          isOpened
            ? 'app-filter-item__icon app-filter-item__icon--active'
            : 'app-filter-item__icon'
        "
      />
    </button>
    <slot v-show="isOpened"></slot>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppFilterButton",
  components: {
    AppIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
      default: () => "",
    },
    hasDropdownIcon: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      isOpened: "false",
    };
  },
};
</script>

<style lang="scss" scoped>
.app-filter-item {
  position: relative;
  padding: 2px 9px;
  border: 1px solid #ececec;
  border-radius: 3px;
  margin: 4px;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);
  }
}
.app-filter-item__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.app-filter-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 14px;
  transition: transform 0.2s ease;

  &--active {
    transform: rotate(180deg);
  }
}
</style>
