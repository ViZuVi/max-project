<template>
  <div>
    <BannerTop />
    <BannerBottom />
    <FeaturesList />
  </div>
</template>

<script>
import BannerTop from "~/components/main/BannerTop";
import BannerBottom from "~/components/main/BannerBottom";
import FeaturesList from "~/components/main/FeaturesList";

export default {
  components: {
    BannerTop,
    BannerBottom,
    FeaturesList,
  },
  // TODO: add ESLint and StyleLint
  // TODO: check build in the end
};
</script>