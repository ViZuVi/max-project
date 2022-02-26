<template>
  <div class="company">
    <h1 class="company__page-title">О компании</h1>
    <AppBreadcrumbs
      :items="[
        { title: 'Главная', link: '/' },
        { title: 'О компании', link: '/company' },
      ]"
    />
    <div class="company__main">
      <div class="company__sidebar-wrapper">
        <AppSideNav :items="menu.subMenu" />
        <nuxt-link :to="'/link'">
          <img
            class="company__banner"
            src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
            alt=""
          />
        </nuxt-link>
        <SubscribeBlock />
        <ActionsBlock />
        <ManagerBlock />

        <!-- TODO: news&blog to ui card (+styles) -->
        <div class="news-block">
          <nuxt-link class="news-block__link font_medium" to="/company/news"
            >Новости</nuxt-link
          >
          <div class="news-block__card">
            <div class="news-block__info">
              <span class="news-block__date font-small">2 августа 2019</span>
              <nuxt-link class="news-block__title font-small" to="/news/1"
                >Новое поступление диванов! Хиты снова в продаже</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="blog-block">
          <nuxt-link class="blog-block__link font_medium" to="/company/blog"
            >Статьи</nuxt-link
          >
          <div class="blog-block__card">
            <img
              class="blog-block__card-img"
              src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
              alt=""
            />
            <div class="blog-block__info">
              <span class="blog-block__date font-small">2 августа 2019</span>
              <nuxt-link class="blog-block__title font-small" to="/blog/1"
                >Топ-5 лучших смартфонов</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="page-content" v-html="contentStatic"></div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "~/components/ui/AppBreadcrumbs";
import AppSideNav from "~/components/ui/AppSideNav";
import SubscribeBlock from "~/components/content/SubscribeBlock";
import ActionsBlock from "~/components/content/ActionsBlock";
import ManagerBlock from "~/components/content/ManagerBlock";
import menuStatic from "~/components/navigation/menu-static";
import contentStatic from "./content-static";

export default {
  components: {
    AppBreadcrumbs,
    AppSideNav,
    SubscribeBlock,
    ActionsBlock,
    ManagerBlock,
  },
  // TODO: change layout names
  layout: "cart",
  data() {
    return {
      contentStatic,
    };
  },
  computed: {
    menu() {
      return menuStatic.find((item) => item.link === "/company");
    },
  },
};
</script>

<style lang="scss" scoped>
.company {
  width: $max-width;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
  @media (max-width: $tablet-width) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 20px;
  }
}
.company__page-title {
  padding-top: 42px;
  padding-bottom: 15px;
}
.company__sidebar-wrapper {
  width: 244px;
  @media (max-width: $tablet-width) {
    display: none;
  }
}
.company__main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.company__banner {
  margin-bottom: 32px;
}
.news-block,
.blog-block {
  margin-bottom: 32px;
}
.news-block__link,
.blog-block__link {
  display: block;
  margin-bottom: 13px;
}
.news-block__card,
.blog-block__card {
  padding: 14px 17px;
  border: $border;
  border-radius: 2px;
}
.news-block__info,
.blog-block__info {
  display: flex;
  flex-direction: column;
}
.news-block__date,
.blog-block__date {
  color: $text-black-9;
  margin-bottom: 2px;
}
.blog-block__card {
  display: flex;
}
.blog-block__card-img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
}
</style>