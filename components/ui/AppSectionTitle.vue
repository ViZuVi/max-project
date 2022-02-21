<template>
  <div class="section-title">
    <AppIcon
      v-if="iconSymbol"
      :symbol="iconSymbol"
      className="section-title__icon"
    />
    <h2 class="section-title__name">{{ title }}</h2>
    <slot></slot>
    <slot name="link">
      <nuxt-link class="section-title__link" :to="allLink">{{
        allName
      }}</nuxt-link>
    </slot>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppSectionTitle",
  components: {
    AppIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: () => "",
    },
    allName: {
      type: String,
      required: false,
      default: () => "",
    },
    allLink: {
      type: String,
      required: false,
      default: () => "",
    },
    iconSymbol: {
      type: String,
      required: false,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #333333;
  margin-bottom: 33px;
}
.section-title__name {
  @include section-title;
}
.section-title__link {
  color: #999999;
  @include font-small-uppercase;
  &:hover {
    color: #356edc;
  }
}
.section-title__icon {
  margin-right: 14px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>