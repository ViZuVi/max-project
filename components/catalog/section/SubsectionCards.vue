<template>
  <div class="subsections">
    <div class="subsections__item" v-for="item in subsections" :key="item.id">
      <nuxt-link
        class="subsections__link"
        :to="`/catalog/${section}/${item.code}`"
      >
        <img class="subsections__img" :src="item.image" alt="item.title" />
      </nuxt-link>
      <div class="subsections__info-wrapper">
        <nuxt-link
          :to="`/catalog/${section}/${item.code}`"
          class="subsections__title"
          >{{ item.title }}</nuxt-link
        >
        <span class="subsections__items-count font-upper">{{ item.count }} товаров</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubsectionCards",
  props: {
    subsections: {
      type: Array,
      required: false,
      default: () => {},
    },
    section: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.subsections {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.subsections__item {
  padding: 24px 25px;
  border: $border;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  width: 25%;
  margin: 0 0 -1px -1px;
  display: flex;
  align-items: center;
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
  }
}
.subsections__info-wrapper {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}
.subsections__items-count {
  color: $text-black-9;
}
</style>
