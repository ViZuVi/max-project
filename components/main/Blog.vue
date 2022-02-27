<template>
  <section class="blog">
    <div class="blog__posts-wrapper">
      <AppSectionTitle title="Блог" allName="Все статьи" allLink="/blog">
        <button class="blog__add-btn">
          <AppIcon symbol="icon_subscribe" className="blog__chat-icon" />
          <span class="blog__subscribe-text">Подписаться</span>
        </button>
      </AppSectionTitle>
      <div class="blog__list">
        <div
          class="blog__item"
          :class="{ 'blog__item--large': i % 3 === 0 }"
          v-for="(post, i) in blogPosts"
          :key="post.id"
        >
          <div class="blog__item-wrapper">
            <nuxt-link
              class="blog__img-wrapper"
              :style="{ backgroundImage: `url(${post.image})` }"
              :to="`/blog/${post.id}`"
            ></nuxt-link>
            <div class="blog__item-info">
              <span class="blog__item-category">{{ post.category }}</span>
              <nuxt-link class="blog__item-title" :to="`/blog/${post.id}`">{{
                post.title
              }}</nuxt-link>
              <!-- TODO: format date -->
              <span class="blog__item-date">{{ post.published }}</span>
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
      blogPosts: {},
    };
  },
  async fetch() {
    const blog = await this.$axios.$get(
      "https://virtserver.swaggerhub.com/Russi4nBe4r/kasumi/0.1.0/blog"
    );
    this.blogPosts = blog.item;
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
.blog__posts-wrapper {
  @include section-size;
  @include adapt-mobile {
    overflow: hidden;
  }
}
.blog__subscribe-text {
  @include adapt-mobile {
    display: none;
  }
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
  display: flex;
  margin-bottom: 36px;
  overflow-x: auto;
}
.blog__item {
  min-height: 458px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  width: 25%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  &--large {
    width: 50%;
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
      @include adapt-mobile {
        background-color: transparent;
        min-width: unset;
        left: 0;
      }
    }
    .blog__item-title,
    .blog__item-date {
      @include adapt-mobile {
        color: #ffffff;
      }
    }
  }
  @include adapt-mobile {
    width: 277px;
    flex-shrink: 0;
  }
}
.blog__item-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #ececec;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);
    .blog__item-title {
      color: #365edc;
    }
  }
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
