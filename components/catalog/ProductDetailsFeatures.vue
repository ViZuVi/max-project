<template>
  <div class="product-details-features">
    <div
      class="product-details-features__item"
      v-for="feature in features"
      :key="feature.title"
    >
      <AppIcon
        :symbol="feature.icon"
        className="product-details-features__item-icon"
      />
      <span class="product-details-features__item-title font-small">
        <span>
          {{ feature.title }}
        </span>
        <span>
          {{ feature.text }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";
import features from "./features-static";

export default {
  name: "ProductDetailsFeatures",
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
.product-details-features {
  display: flex;
  justify-content: space-between;
  max-width: $max-width;
  margin: 0 auto;
  padding: 31px 32px 27px;
  @include adapt-mobile {
    width: 100%;
    flex-wrap: wrap;
  }
}
.product-details-features__item {
  width: 25%;
  display: flex;
  @include adapt-mobile {
    width: 50%;
    flex-wrap: wrap;
    padding-bottom: 27px;
  }
}
.product-details-features__item-title {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  color: $text-black-6;
  @include adapt-mobile {
    padding-left: 0;
  }
}
.product-details-features__item-icon svg {
  width: 32px;
  height: 32px;
}
</style>
