export const state = () => ({
  reviews: [],
  blogPosts: [],
})

export const mutations = {
  setReviews(state, payload) {
    state.reviews = payload;
  },
  setBlogPosts(state, payload) {
    state.blogPosts = payload;
  },
}

export const actions = {
  getReviews({ commit }) {
    // TODO: to nuxtServerInit?
    const mockReviews = [
      {
        id: 1,
        // TODO: Add in mocks - name, rating
        name: "Анжелика Трофимова",
        image:
          "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
        title: "Тестовый комметарий",
        text: "Купили сыну телефон Nika 8 LITE в этом интернет-магазине. Всем рекомендую! Сейчас такой ритм жизни, что совсем нет времени ездить по магазинам. Сайт нашла в поиске. Понравились характеристики и адекватная цена за телефон. Выбирала подарок на день ро...",
        published: "1997-01-01 00:00:01",
        raiting: 5,
      },
      {
        id: 2,
        // TODO: Add in mocks - name, rating
        name: "Анжелика Трофимова",
        image:
          "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
        title: "Тестовый комметарий",
        text: "Купили сыну телефон Nika 8 LITE в этом интернет-магазине. Всем рекомендую! Сейчас такой ритм жизни, что совсем нет времени ездить по магазинам. Сайт нашла в поиске. Понравились характеристики и адекватная цена за телефон. Выбирала подарок на день ро...",
        published: "1997-01-01 00:00:01",
        raiting: 5,
      },
    ]
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commit('setReviews', mockReviews));
      }, 100);
    })
  },
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
