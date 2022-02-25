<template>
  <section class="blog">
    <!-- TODO: check all wrappers -->
    <div class="blog__wrapper">
      <AppSectionTitle title="Блог" allName="Все статьи" allLink="/blog">
        <button class="blog__add-btn">
          <AppIcon symbol="icon_subscribe" className="blog__chat-icon" />
          <span>Подписаться</span>
        </button>
      </AppSectionTitle>
      <div class="blog__list">
        <div
          class="blog__item"
          :class="{ 'blog__item--large': i % 3 === 0 }"
          v-for="(item, i) in items"
          :key="item.id"
        >
          <div class="blog__item-wrapper">
            <nuxt-link
              class="blog__img-wrapper"
              :style="{ backgroundImage: `url(${item.image})` }"
              :to="`/blog/${item.id}`"
            ></nuxt-link>
            <div class="blog__item-info">
              <span class="blog__item-category">{{ item.category }}</span>
              <nuxt-link class="blog__item-title" :to="`/blog/${item.id}`">{{
                item.title
              }}</nuxt-link>
              <!-- TODO: format date -->
              <span class="blog__item-date">{{ item.published }}</span>
            </div>
          </div>
        </div>
      </div>
      <AppButton label="Загрузить еще" className="app-button--transparent" />
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppButton from "~/components/ui/AppButton";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "Blog",
  components: {
    AppSectionTitle,
    AppButton,
    AppIcon,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Тестовая запись",
          // TODO: add category in mocks
          category: "Советы покупателям",
          code: "test_blog",
          text: "Как ухаживать за полиэстером, чтобы сохранить цвет",
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          published: "2022-01-01 17:39",
        },
        {
          id: 2,
          title: "Тестовая запись",
          // TODO: add category in mocks
          category: "Советы покупателям",
          code: "test_blog",
          text: "Как ухаживать за полиэстером, чтобы сохранить цвет",
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          published: "2022-01-01 17:39",
        },
        {
          id: 3,
          title: "Тестовая запись",
          // TODO: add category in mocks
          category: "Советы покупателям",
          code: "test_blog",
          text: "Как ухаживать за полиэстером, чтобы сохранить цвет",
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          published: "2022-01-01 17:39",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  border-bottom: 1px solid #ececec;
  .section-title__name {
    margin-right: 38px;
  }
}
.blog__wrapper {
  @include section-size;
}
.blog__add-btn {
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999999;
  margin-left: 37px;
  margin-right: auto;
  display: flex;
  align-items: center;

  &:hover {
    color: #365edc;
  }
}
.blog__chat-icon {
  margin-right: 12px;
  color: inherit;

  svg {
    width: 16px;
    height: 16px;
  }
}
.blog__list {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 36px;
  margin-bottom: 36px;
}
.blog__item {
  min-height: 458px;
  border: 1px solid #ececec;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    .blog__item-title {
      color: #365edc;
    }
  }
  &--large {
    .blog__img-wrapper {
      flex-grow: 1;
    }
    .blog__item-info {
      position: absolute;
      background-color: #ffffff;
      right: 0;
      bottom: 0;
      min-height: 250px;
      min-width: 313px;
    }
  }
}
.blog__item-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.blog__img-wrapper {
  height: 208px;
  background-size: cover;
  background-position: center;
}
.blog__item-info {
  padding: 23px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.blog__item-date {
  margin-top: auto;
}
.blog__item-category {
  margin-bottom: 11px;
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999999;
}
.blog__item-title {
  color: #333333;
  font-size: 0.9334em;
}
.blog__item-date {
  color: #555555;
  font-size: 0.867em;
  line-height: 1.692em;
}
</style>
