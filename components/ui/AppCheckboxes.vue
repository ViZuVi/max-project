<template>
  <div class="app-checkboxes">
    <v-checkbox
      color="#365edc"
      v-for="item in items"
      :key="item.value"
      :label="item.title"
      :value="item.value"
      :hide-details="true"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "AppCheckboxes",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.app-checkboxes {
  padding: 19px 19px 0 19px;

  .v-input--checkbox {
    margin: 0;
    padding: 0;
  }

  .v-label {
    color: $text-black-3;
    font-size: 13px;
  }

  .v-input__control {
    margin-bottom: 11px;
  }
}
</style>
