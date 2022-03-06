export const state = () => ({
  // TODO: To asyncData in component
  section: {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
    title: "Электроника",
    code: "electronics",
    subSections: [
      {
        id: 1,
        image:
          "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
        title: "Тестовый раздел",
        code: "test_section",
      },
    ],
  },
  products: [],
  productsCount: 34,
})

export const mutations = {
}

export const actions = {
}
