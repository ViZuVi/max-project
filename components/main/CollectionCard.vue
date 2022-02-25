<template>
  <div class="collection-card">
    <nuxt-link
      class="collection-card__img-wrapper"
      :to="`/collections/${collection.id}`"
      :style="{ backgroundImage: `url(${collection.image})` }"
    ></nuxt-link>
    <nuxt-link class="collection-card__link" :to="`/collections/${collection.id}`">
      {{ collection.link }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CollectionCard",
  props: {
    collection: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-card {
  display: flex;
  flex-direction: column;
  padding: 40px 30px 29px;
  background: #f5f5f5;
  transition: background-color ease 0.2s, transform ease 0.2s,
    box-shadow ease 0.2s;
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    background-color: #ffffff;

    .collection-card__img-wrapper::before {
      background-color: #ffffff;
    }

    .collection-card__link {
      color: #365edc;
    }
  }
}
.collection-card__img-wrapper {
  display: block;
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 27px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 3px;
  &::before {
    content: "";
    position: absolute;
    background-color: #f5f5f5;
    width: 40px;
    height: 20px;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    left: 50%;
    margin-left: -20px;
    top: -10px;
    transition: background-color ease 0.2s;
  }
}
.collection-card__link {
  font-size: 15px;
  line-height: 25px;
  color: #333333;
  text-align: center;
}
</style>