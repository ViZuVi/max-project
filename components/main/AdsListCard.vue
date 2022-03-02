<template>
  <div class="ads-list-card">
    <div class="ads-list-card__link-wrapper">
      <nuxt-link
        class="ads-list-card__link"
        :to="card.link"
        :style="{ backgroundImage: `url(${card.img})` }"
      >
      </nuxt-link>
    </div>
    <div class="ads-list-card__link-text">
      <span class="ads-list-card__title">{{ card.title }}</span>
      <span class="ads-list-card__category font-small">{{ card.category }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdsListCard",
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.ads-list-card {
  flex-basis: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding-bottom: 65px;
  &:not(:last-child) {
    margin-right: 32px;
  }
}
.ads-list-card__link-wrapper {
  width: 313px;
  height: 431px;
  overflow: hidden;
  margin-bottom: 25px;
  position: relative;
}
.ads-list-card__link {
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.05);
  }
}
.ads-list-card__link-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.ads-list-card__title {
  margin-bottom: 6px;
  font-size: 1.2em;
  line-height: 1.454em;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: #007aff;
  }
}
.ads-list-card__category {
  margin-bottom: 20px;
  color: #777777;
}
</style>