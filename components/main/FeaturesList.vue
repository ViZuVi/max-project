<template>
  <section class="features-list">
    <div class="features-list__wrapper">
      <div
        class="features-list__item"
        v-for="feature in features"
        :key="feature.title"
      >
        <AppIcon :symbol="feature.icon" className="features-list__icon" />
        <span class="features-list__item-title font-medium">{{ feature.title }}</span>
        <span class="features-list__item-text font-small">{{ feature.text }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import features from "./features-static";

export default {
  name: "FeaturesList",
  components: {
    AppIcon,
  },
  data() {
    return {
      features,
    };
  },
};
</script>

<style lang="scss" scoped>
.features-list {
  width: 100%;
  background-color: #f8f8f8;
  border-bottom: $border;
}
.features-list__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 69px;
  padding-bottom: 33px;
  max-width: $max-width;
  margin: 0 auto;
}
.features-list__item {
  flex-basis: 20%;
  padding: 0 16px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 186px;
}
.features-list__item-title {
  color: $text-black-3;
  margin-bottom: 6px;
}
.features-list__item-text {
  color: $text-black-6;
  margin-bottom: 6px;
}
.features-list__icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}
</style>