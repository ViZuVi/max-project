<template>
  <v-radio-group
    class="app-radio-group"
    :value="value"
    dense
    :hide-details="true"
  >
    <v-radio
      v-for="item in items"
      :key="item.value"
      :label="item.title"
      :value="item.value"
    ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: "AppRadioGroup",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.app-radio-group {
  padding: 19px;
  margin: 0;

  .v-label {
    color: $text-black-3;
    font-size: 13px;
  }

  // .v-input--radio-group {
  //   margin: 0;
  //   padding: 0;
  // }
}
</style>
