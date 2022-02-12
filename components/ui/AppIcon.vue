<template>
  <span
    @click="$emit('click', $event)"
    :class="className"
    v-html="currentIcon"
  ></span>
</template>

<script>
import icons from "./icons.js";
export default {
  name: "AppIcon",
  props: {
    symbol: {
      type: String,
      required: true,
      default: () => "",
    },
    className: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  computed: {
    currentIcon () {
      return icons[this.symbol];
    },
  },
};
</script>