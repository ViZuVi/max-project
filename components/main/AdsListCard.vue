<template>
  <div class="ads-list-card">
    <a
      class="ads-list-card__link"
      :href="card.link"
      :style="{ backgroundImage: `url(${card.img})` }"
    >
    </a>
    <a class="ads-list-card__title">{{ card.title }}</a>
    <span class="ads-list-card__category">{{ card.category }}</span>
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
  &:not(:last-child) {
    margin-right: 32px;
  }
}
.ads-list-card__link {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 431px;
  background-color: grey;
  margin-bottom: 25px;
  background-position: center;
  background-size: cover;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.05);
  }
}
.ads-list-card__title {
  margin-bottom: 6px;
  font-size: 1.2em;
  line-height: 1.454em;
  color: inherit;
  &:hover {
    color: #007aff;
  }
}
.ads-list-card__category {
  margin-bottom: 20px;
  font-size: 0.867em;
  line-height: 1.692em;
  color: #777777;
}
</style>