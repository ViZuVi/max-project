<template>
  <button :type="type" class="app-button" :class="className" @click="$emit('click', $event)">
    <span>{{ label }}</span>
    <AppIcon v-if="btnSymbol" :symbol="btnSymbol" :className="iconClassName" />
  </button>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppButton",
  components: {
    AppIcon
  },
  props: {
    type: {
      type: String,
      required: false,
      default: () => "button",
    },
    className: {
      type: String,
      required: false,
      default: () => "",
    },
    label: {
      type: String,
      required: false,
      default: () => "",
    },
    btnSymbol: {
      type: String,
      required: false,
      default: () => "",
    },
    iconClassName: {
      type: String,
      required: false,
      default: () => "",
    }
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  padding: 10px 18px;
  font-family: inherit;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  // transform: translate3d(0,0,0);
  white-space: nowrap;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &--transparent {
    border: 1px solid $text-link-hover;
    color: $text-link-hover;
    background-color: transparent;

    &:hover {
      background-color: $text-link-hover;
      color: #ffffff;
    }
  }

  &--small{
    padding: 10px 14px 8px;
    font-size: 9px;
  }
}
</style>