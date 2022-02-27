export const state = () => ({
  blogPosts: [],
})

export const mutations = {
  setBlogPosts(state, payload) {
    state.blogPosts = payload;
  },
}

export const actions = {
  getBlogPosts({ commit }) {
    // TODO: to nuxtServerInit?
    const mockPosts = [
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
    ]
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commit('setBlogPosts', mockPosts));
      }, 100);
    })
  }
}
