<template>
  <div class="sort-header">
    <div class="sort-header__sort-select">
      <v-select :items="sortTypes" :label="activeSortType"></v-select>
    </div>
    <div class="sort-header__views-wrapper">
      <div class="sort-header__view-size">
        <button>
          <AppIcon
            symbol="icon_card_view_small"
            className="sort-header__icon"
          />
        </button>
        <button>
          <AppIcon
            symbol="icon_card_view_large"
            className="sort-header__icon"
          />
        </button>
      </div>
      <div class="sort-header__view-type">
        <button>
          <AppIcon symbol="icon_card_view_tile" className="sort-header__icon" />
        </button>
        <button>
          <AppIcon symbol="icon_card_view_list" className="sort-header__icon" />
        </button>
        <button>
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
  data() {
    return {
      sortTypes,
      activeSortType: sortTypes[1],
      activeViewType: "",
      activeViewSize: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.sort-header {
  display: flex;
  align-items: center;
  padding: 13px 0 14px;
  border-bottom: $border;

  
}
.sort-header__views-wrapper {
  display: flex;
  align-items: center;
}
.sort-header__sort-select {
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
</style>
