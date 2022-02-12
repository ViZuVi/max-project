module.exports = {
  css: [
    "~/assets/css/fonts.scss",
    "~/assets/css/variables.scss",
    "~/assets/css/common.scss",
  ],
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