<template>
  <div class="app-availability">
    <v-tooltip
      bottom
      :open-on-hover="false"
      :open-on-focus="false"
      content-class="app-availability__tooltip"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="app-availability__btn"
          :class="{ 'app-availability__btn--underlined': hasModal }"
          v-bind="attrs"
          v-on="on"
        >
          {{ availability }}
        </button>
      </template>
      <span>Stock info</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "AppAvailabilityBlock",
  props: {
    availability: {
      type: String,
      required: true,
      default: () => "",
    },
    hasModal: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss">
.app-availability {
  line-height: 15px;
}
.app-availability__btn {
  font-size: 0.8em;
  line-height: 15px;
  margin-right: 24px;
  margin-left: 15px;
  color: #5fa800;
  position: relative;
  pointer-events: none;
  &--underlined {
    border-bottom: 1px dotted #5fa800;
    pointer-events: unset;
  }
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #5fa800;
  }
}
.app-availability__tooltip {
  background-color: #ffffff;
  color: $text-black-3;
  padding: 18px 14px 24px;
  width: 275px;
  box-shadow: 0 20px 50px 0 rgb(0 0 0 / 15%);
  border-radius: 3px;
  opacity: 1 !important;
}
</style>
