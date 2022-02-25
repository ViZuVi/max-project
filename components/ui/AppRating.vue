<template>
  <div class="app-rating">
    <AppIcon
      v-for="(item, i) in stars"
      :key="i"
      symbol="icon_star"
      :className="
        i < ratingRounded
          ? 'app-rating__icon app-rating__icon--filled'
          : 'app-rating__icon'
      "
    />
    <span class="app-rating__value" v-if="showRatingValue">{{ rating }}</span>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppRating",
  components: {
    AppIcon,
  },
  props: {
    rating: {
      type: Number,
      required: false,
    },
    showRatingValue: {
      type: Boolean,
      required: false,
      default: () => true,
    },
  },
  data() {
    return {
      stars: Array(5),
    };
  },
  computed: {
    ratingRounded() {
      return Math.round(this.rating);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-rating {
  display: flex;
  align-items: center;
}
.app-rating__icon {
  color: #dddddd;

  &--filled {
    color: #e6c553;
  }
}
.app-rating__value {
  font-size: 0.8em;
  line-height: 1.692em;
  color: #555555;
  margin-left: 10px;
}
</style>