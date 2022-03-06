<template>
  <AppSideNav :section="section" :items="section.items" />
</template>

<script>
import AppSideNav from "~/components/ui/AppSideNav";

export default {
  name: "SectionNav",
  components: {
    AppSideNav,
  },
  data() {
    return {
      section: {
        title: "Каталог",
        icon: "icon_catalog",
        items: [
          {
            title: "Электроника",
            link: "",
            subSections: [
              { id: 1, title: "Телевизоры", icon: "icon_tv" },
              { id: 2, title: "Аудиотехника", icon: "icon_tv" },
            ],
          },
          {
            title: "Транспорт",
            link: "",
            subSections: [
              { id: 3, title: "Телевизоры", icon: "icon_tv" },
              { id: 4, title: "Аудиотехника", icon: "icon_tv" },
            ],
          },
          {
            title: "Мебель",
            link: "",
            subSections: [
              {
                id: 5,
                title: "Телевизоры",
                icon: "icon_tv",
                items: [{ id: 1, title: "Test" }],
              },
              {
                id: 6,
                title: "Аудиотехника",
                icon: "icon_tv",
                items: [{ id: 2, title: "Test" }],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>