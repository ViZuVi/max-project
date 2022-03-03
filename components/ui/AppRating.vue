<template>
  <div class="app-rating">
    <AppIcon
      v-for="(item, i) in stars"
      :key="i"
      symbol="icon_star"
      :className="[
        large ? 'app-rating__icon--large' : '',
        i < ratingRounded
          ? 'app-rating__icon app-rating__icon--filled'
          : 'app-rating__icon',
      ]"
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
    large: {
      type: Boolean,
      required: false,
      default: () => false,
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

<style lang="scss" >
.app-rating {
  display: flex;
  align-items: center;
}
.app-rating__icon {
  color: #dddddd;

  &--filled {
    color: #e6c553;
  }

  &--large svg {
    width: 21px;
    height: 20px;
  }
}
.app-rating__value {
  font-size: 0.8em;
  line-height: 1.692em;
  color: $text-black-5;
  margin-left: 10px;
}
</style>