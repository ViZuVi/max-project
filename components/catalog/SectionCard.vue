<template>
  <div class="section-card" :class="{ 'section-card--shadow': link }">
    <div class="section-card__content">
      <img class="section-card__img" v-if="image" :src="image" />
      <div v-if="content" class="section-card__info">
        <span class="section-card__name font-upper">{{ content.name }}</span>
        <nuxt-link class="section-card__title" :to="content.link">{{ content.title }}</nuxt-link>
        <p>{{ content.text }}</p>
      </div>
      <slot> </slot>
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
    },
    content: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.section-card {
  width: 100%;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 30px 40px;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  display: flex;
  align-items: flex-start;

  .section-card__btn {
    flex-shrink: 0;
    margin-right: 0;
    padding: 0;
    margin-left: 30px;
    width: 38px;
    height: 38px;
    border: $border;
    color: $text-black-9;
  }

  &--shadow:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    .section-card__btn {
      background-color: $text-link-hover;
      color: #ffffff;
    }
    .section-card__title {
      color: $text-link-hover;
    }
  }
}
.section-card__content {
  flex-grow: 1;
  display: flex;
}
.section-card__img {
  width: 150px;
  min-height: 100px;
  margin-right: 35px;
}
.section-card__info {
  display: flex;
  flex-direction: column;
}
.section-card__name {
  margin-bottom: 10px;
}
.section-card__title {
      margin-bottom: 0.8rem;
}
</style>