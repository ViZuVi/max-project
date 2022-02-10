module.exports = {
  css: [
    "~/assets/css/variables.scss",
    "~/assets/css/common.scss",
  ],
  buildModules: [
    '@nuxtjs/style-resources',
    // '@nuxtjs/vuetify', // TODO: add plugin
  ],
  styleResources: {
    scss: [
      "~assets/css/variables.scss",
      "~assets/css/mixins.scss"
    ],
  },
}