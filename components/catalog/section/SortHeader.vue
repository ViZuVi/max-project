<template>
  <div class="sort-header">
    <div class="sort-header__sort-select">
      <v-select :items="sortTypes" dense :hide-details="true">
        <template #append>
          <AppIcon symbol="icon_dropdown" className="app-select__icon" />
        </template>
      </v-select>
    </div>
    <!-- TODO: size and type to helper file -->
    <div class="sort-header__views-wrapper">
      <div class="sort-header__view-size" v-if="viewType === 'tile'">
        <button
          class="sort-header__btn sort-header__size-btn"
          :class="viewSize === 'large' ? 'sort-header__btn--active' : ''"
          @click="$emit('change-view-size', 'large')"
        >
          <AppIcon
            symbol="icon_card_view_small"
            className="sort-header__icon"
          />
        </button>
        <button
          class="sort-header__btn sort-header__size-btn"
          :class="viewSize === 'small' ? 'sort-header__btn--active' : ''"
          @click="$emit('change-view-size', 'small')"
        >
          <AppIcon
            symbol="icon_card_view_large"
            className="sort-header__icon"
          />
        </button>
      </div>
      <div class="sort-header__view-type">
        <button
          class="sort-header__btn"
          :class="viewType === 'tile' ? 'sort-header__btn--active' : ''"
          @click="$emit('change-view-type', 'tile')"
        >
          <AppIcon symbol="icon_card_view_tile" className="sort-header__icon" />
        </button>
        <button
          class="sort-header__btn"
          :class="viewType === 'list' ? 'sort-header__btn--active' : ''"
          @click="$emit('change-view-type', 'list')"
        >
          <AppIcon symbol="icon_card_view_list" className="sort-header__icon" />
        </button>
        <button
          class="sort-header__btn"
          :class="viewType === 'table' ? 'sort-header__btn--active' : ''"
          @click="$emit('change-view-type', 'table')"
        >
          <AppIcon
            symbol="icon_card_view_table"
            className="sort-header__icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import sortTypes from "./sort-types";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "SortHeader",
  components: {
    AppIcon,
  },
  props: {
    viewType: {
      type: String,
      required: true,
      default: () => "tile",
    },
    viewSize: {
      type: String,
      required: false,
      default: () => "small",
    },
  },
  data() {
    return {
      sortTypes,
      activeSortType: sortTypes[1],
    };
  },
};
</script>

<style lang="scss">
.sort-header {
  display: flex;
  align-items: center;
  padding: 13px 0 14px;
  border-bottom: $border;

  .v-input__slot {
    width: auto;
    &::after {
      content: none !important;
    }
  }

  .v-select__selection {
    margin: 0 !important;
    font-size: 0.867em;
    line-height: 1.692em;
    color: $text-black-3;
  }
}
.sort-header__views-wrapper {
  display: flex;
  align-items: center;
}
.sort-header__sort-select {
  padding-top: 9px;
  margin-right: auto;
}
.sort-header__icon {
  padding: 4px 7px;
}
.sort-header__view-size {
  padding-right: 19px;
  margin-right: 30px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: inline-block;
    width: 1px;
    background-color: #ececec;
    height: 100%;
  }
}
.sort-header__btn {
  &:hover:not(.sort-header__btn--active) {
    color: $text-link-hover;
  }
  &--active {
    pointer-events: none;
    color: #999999;
  }
}
</style>
