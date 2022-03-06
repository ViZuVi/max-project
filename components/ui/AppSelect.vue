<template>
  <div class="app-select">
    <v-select
      :items="items"
      :label="label"
      :hide-details="true"
      background-color="#fafafa"
      :value="value"
    >
      <template #append>
        <AppIcon symbol="icon_dropdown" className="app-select__icon" />
      </template>
    </v-select>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppSelect",
  components: {
    AppIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    label: {
      type: String,
      required: false,
      default: () => "",
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
.app-select {
  padding: 19px;

  .v-input__slot {
    &::after {
      content: none !important;
    }
  }

  .v-select {
    margin: 0;
    padding: 0;
  }

  .v-select__slot {
    border: 1px solid #eee;
    border-radius: 3px;
    margin: 0;
  }
  .v-input__append-inner {
    margin: 0;
  }
  .v-select__selection {
    margin: 0;
    padding: 0 11px;
    font-size: 13px;
  }
}
.app-select__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 32px;
}
</style>
