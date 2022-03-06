<template>
  <div class="app-range">
    <span class="app-range__title">{{ title }}</span>
    <v-range-slider
      dense
      :max="max"
      :min="min"
      v-model="range"
      track-fill-color="#365edc"
      hide-details
    >
      <template #prepend>
        <input type="text" :value="range[0]" @change="$set(range, 0, $event)" />
      </template>
      <template #append>
        <input type="text" :value="range[1]" @change="$set(range, 1, $event)" />
      </template>
    </v-range-slider>
    <div class="app-range__values">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRange",
  props: {
    title: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  data() {
    return {
      min: 500,
      max: 95400,
      range: [500, 95400],
    };
  },
};
</script>

<style lang="scss">
.app-range {
  background-color: #ffffff;
  border-top: 1px solid #ececec;
  padding: 19px 19px 15px 19px;

  .v-input--range-slider {
    flex-wrap: wrap;
  }

  .v-input__prepend-outer,
  .v-input__append-outer {
    margin: 0;
    width: 50%;
    border: $border;
    padding: 9px 8px 9px;
    background-color: #f8f8f8;
    font-size: 14px;
    color: #cccccc;
    height: 48px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding-left: 15px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      padding-right: 15px;
    }
    input {
      color: inherit;
    }
  }

  .v-slider {
    height: 40px;
  }

  .v-input__control {
    order: 1;
  }

  .v-slider__thumb {
    width: 22px;
    height: 22px;
    background-color: #ffffff !important;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);

    &::before {
      transform: none !important;
      opacity: 1;
      background-color: $text-link-hover;
      width: 6px;
      height: 6px;
      top: 8px;
      left: 8px;
    }
  }
}
.app-range__title {
  display: inline-block;
  margin-bottom: 15px;
  padding-right: 15px;
  font-size: 13px;
}
.app-range__values {
  display: flex;
  justify-content: space-between;
  color: $text-black-9;
  font-size: 10px;
  padding: 0 11px;
  margin-top: -10px;
}
</style>
