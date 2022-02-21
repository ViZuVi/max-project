<template>
  <section class="instagram">
    <div class="instagram__wrapper">
      <AppSectionTitle
        title="Мы в Instagram"
        allName="Все публикации"
        allLink="https://www.instagram.com/aspro_ru/"
      >
        <template #link>
          <a class="instagram__link" href="https://www.instagram.com/aspro_ru/">
            <AppIcon symbol="icon_instagram" className="instagram__icon" />
            <span>Все публикации</span>
          </a>
        </template>
      </AppSectionTitle>
      <div class="instagram__posts">
        <div class="instagram__post" v-for="post in posts" :key="post.id">
          <a
            class="instagram__post-link"
            :href="post.link"
            target="_blank"
            :style="{ backgroundImage: `url(${post.image})` }"
          >
            <div class="instagram__post-wrapper">
              <span class="instagram__post-date">{{ post.published }}</span>
              <div class="instagram__post-text">{{ post.text }}</div>
              <span class="instagram__post-tags"
                >{{ post.tags.join(" ") }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "Instagram",
  components: {
    AppSectionTitle,
    AppIcon,
  },
  data() {
    return {
      // TODO: frormat date
      posts: [
        {
          id: 1,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 2,
          image: require("~/assets/img/insta-1.jpg"),
          text: `
Выступали на IT-митапе в прошлую субботу ?

Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ?

Верим, что будущее IT в надёжных руках!
          
`,
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 3,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 4,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 5,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 6,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
        {
          id: 7,
          image: require("~/assets/img/insta-1.jpg"),
          text: "Выступали на IT-митапе в прошлую субботу ? Целью мероприятия было показать выпускникам и начинающим специалистам, что найти интересную работу и реализовать себя можно и в нашем регионе ? Верим, что будущее IT в надёжных руках!",
          published: "18 февраля",
          tags: ["#aspro_team", "#aspro_events"],
          link: "https://www.instagram.com/p/CaHe6AGoIDe/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.instagram {
  border-bottom: 1px solid #ececec;
  background-color: #f8f8f8;
}
.instagram__wrapper {
  // TODO: change mixin
  @include section-size;
  padding-bottom: 70px;
}
.instagram__link {
  color: #999999;
  display: flex;
  align-items: center;
  @include font-small-uppercase;
  &:hover {
    color: #356edc;
  }
}
.instagram__icon {
  margin-right: 10px;
}
.instagram__posts {
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;
}
.instagram__post {
  border: 1px solid #ebebef;
  // TODO: heigh?
  min-height: 267.59px;
  &:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
.instagram__post-wrapper {
  padding: 30px;
  position: absolute;
  z-index: -1;
  opacity: 0;
  background-color: #ffffff;
  height: 100%;
  overflow: auto;
  transition: opacity 0.3s;
}
.instagram__post-link {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  &:hover {
    .instagram__post-wrapper {
      z-index: 1;
      opacity: 1;
    }
  }
}
.instagram__post-date {
  display: block;
  font-size: 0.733em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999999;
  margin-bottom: 15px;
}
.instagram__post-text,
.instagram__post-tags {
  font-size: 0.867em;
  line-height: 1.692em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
  color: #333333;
}
</style>