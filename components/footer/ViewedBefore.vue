<template>
  <section class="viewed-before">
    <div class="viewed-before__wrapper">
      <h2 class="viewed-before__section-title">Ранее вы смотрели</h2>
      <!-- TODO: add carousel -->
      <div class="viewed-before__list">
        <div v-for="card in cards" :key="card.id" class="viewed-before__card">
          <nuxt-link
            class="viewed-before__img-link"
            :to="`/catalog/${card.id}`"
          >
            <img class="viewed-before__img" :src="card.img" alt="" />
          </nuxt-link>
          <div class="viewed-before__info">
            <nuxt-link
              :to="`/catalog/${card.id}`"
              class="viewed-before__title"
              >{{ card.name }}</nuxt-link
            >
            <span class="viewed-before__price">{{ card.price }} ₽/шт</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";

export default {
  name: "ViewedBefore",
  components: {
    AppSectionTitle,
  },
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.viewed-before {
  border-bottom: 1px solid #ececec;
  background-color: #f8f8f8;

  .viewed-before__section-title {
    font-size: 1.3333em;
    line-height: 1.4em;
    margin-bottom: 1.533rem;
    font-weight: normal;
  }
}
.viewed-before__wrapper {
  @include section-size;
}
.viewed-before__list {
  display: flex;
}
.viewed-before__info {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.viewed-before__card {
  display: flex;
  padding: 14px;
  background-color: #ffffff;
  width: 261.6px;
  border: 1px solid #ececec;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);
  }
}
.viewed-before__title {
  display: flex;
  align-items: center;
  height: 54px;
  font-size: 0.867em;
  line-height: 1.385em;
  color: #333333;
  &:hover {
    color: #365edc;
  }
}
.viewed-before__price {
  font-weight: bold;
  font-size: 0.933em;
  line-height: 1.501em;
  color: #333333;
}
.viewed-before__img-link {
  display: block;
}
.viewed-before__img {
  display: block;
  width: 90px;
  height: 90px;
}
</style>