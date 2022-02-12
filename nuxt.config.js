module.exports = {
  css: [
    "~/assets/css/fonts.scss",
    "~/assets/css/variables.scss",
    "~/assets/css/common.scss",
  ],
  head: {
    title: "Max",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Shop" }
    ],
    // link: {rel: "icon", type: "image/x-icon", href: "favicon.ico"}
  },
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    scss: [
      "~assets/css/variables.scss",
      "~assets/css/mixins.scss"
    ],
  },
}