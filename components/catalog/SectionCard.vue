<template>
  <div class="section-card" :class="{ 'section-card--shadow': link }">
    <div class="section-card__content">
      <img src="" alt="">
      <div></div>
    </div>
    <AppButton
      v-if="link"
      className="app-button--transparent section-card__btn"
      btnSymbol="icon_button_arrow"
      @click="$router.push(link)"
    />
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "SectionCard",
  components: {
    AppButton,
  },
  props: {
    link: {
      type: String,
      required: false,
      default: () => "",
    },
    image: {
      type: String,
      required: false,
      default: () => "",
    }
  },
};
</script>

<style lang="scss" scoped>
.section-card {
  width: 100%;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 30px 40px;
  margin: 0 0 -1px;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  display: flex;

  .section-card__btn {
    margin-right: 0;
  }

  &--shadow:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    .section-card__btn {
      background-color: $text-link-hover;
      color: #ffffff;
    }
  }
}
</style>