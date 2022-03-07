<template>
  <div class="app-filter-item">
    <button class="app-filter-item__btn" @click="$emit('click')">
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
    <div class="app-filter-item__options" v-show="isOpened">
      <slot></slot>
      <div class="app-filter-item__footer">Выбрано: 1</div>
    </div>
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
    isOpened: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    selected: {
      type: Boolean,
      required: false,
      default: () => false,
    },
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
  font-size: 13px;
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
.app-filter-item__options {
  position: absolute;
  background-color: #ffffff;
  top: 31px;
  left: 0;
  min-width: 232px;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);
  z-index: 1;
  border-radius: 3px;
  overflow: hidden;
}
.app-filter-item__footer {
  padding: 12px 5px 14px 18px;
  font-size: 13px;
  color: $text-black-6;
  background-color: #f8f8f8;
  border-top: 1px solid #ececec;
}
</style>
