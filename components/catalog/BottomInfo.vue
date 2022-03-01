<template>
  <div class="bottom-info">
    <div class="bottom-info__wrapper">
      <div class="bottom-info__left">
        <InfoTabs :product="product" />
        
        <div class="bottom-info__left-section">
          <div class="bottom-info__left-title font-large">Услуги</div>
          <SectionCard link="/services"></SectionCard>
        </div>
        <div class="bottom-info__left-section">
          <div class="bottom-info__left-title font-large">Статьи</div>
          <SectionCard link="/blog/1"></SectionCard>
          <SectionCard link="/blog/2"></SectionCard>
        </div>
        <div class="bottom-info__left-additional-goods">
          
        </div>
      </div>

      <div class="bottom-info__right"></div>
    </div>
  </div>
</template>

<script>
import InfoTabs from "./tabs/InfoTabs";
import SectionCard from "./SectionCard";

export default {
  name: "BottomInfo",
  components: {
    InfoTabs,
    SectionCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-info {
  border-top: $border;
}
.bottom-info__wrapper {
  max-width: $max-width;
  margin: 3.133rem auto 50px;
}
.bottom-info__left-section {
  margin: 3.133rem 0 3.133rem;
}
.bottom-info__left-title {
  padding-bottom: 1.933rem;
}
</style>