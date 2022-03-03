module.exports = {
  css: [
    "~/assets/css/fonts.scss",
    "~/assets/css/variables.scss",
    "~assets/css/mixins.scss",
    "~/assets/css/common.scss",
  ],
  head: {
    title: "Max",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Shop" }
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: ['~/plugins/directives.js'],
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
    '@nuxtjs/moment',
    // TODO: add ESLint and StyleLint
    // '@nuxtjs/stylelint-module',
    // '@nuxtjs/eslint-module',
  ],
  moment: {
    locales: ['ru']
  },
  styleResources: {
    scss: [
      "~assets/css/variables.scss",
      "~assets/css/mixins.scss"
    ],
  },
  build: {
    loaders: { imgUrl: { esModule: false } },
  }
}