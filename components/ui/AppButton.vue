<template>
  <button :type="type" class="app-button" :class="className">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
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
      required: true,
      default: () => "",
    },
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

  &.transparant {
    border: 1px solid #365edc;
    color: #365edc;
    background-color: transparent;

    &:hover {
      background-color: #365edc;
      color: #ffffff;
    }
  }
}
</style>