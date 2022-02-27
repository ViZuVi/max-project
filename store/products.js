export const state = () => ({
  collections: [],
  selectedProduct: null,
})

export const mutations = {
  setCollections(state, payload) {
    state.collections = payload;
  },
  setSelectedProduct(state, payload) {
    state.selectedProduct = payload;
  },
}

export const actions = {
  getCollections({ commit }) {
    // TODO: to nuxtServerInit?
    const mockCollections = [
      {
        id: 1,
        title: "Топ-10 бестселлеров электроники",
        image: require("~/assets/img/collection-1.jpg"),
        link: "/catalog/test_section",
      },
      {
        id: 2,
        title: "Топ-10 бестселлеров электроники",
        image: require("~/assets/img/collection-2.jpg"),
        link: "/catalog/test_section",
      },
      {
        id: 3,
        title: "Топ-10 бестселлеров электроники",
        image: require("~/assets/img/collection-2.jpg"),
        link: "/catalog/test_section",
      },
      {
        id: 4,
        title: "Топ-10 бестселлеров электроники",
        image: require("~/assets/img/collection-2.jpg"),
        link: "/catalog/test_section",
      },
      {
        id: 5,
        title: "Топ-10 бестселлеров электроники",
        image: require("~/assets/img/collection-2.jpg"),
        link: "/catalog/test_section",
      },
    ]
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commit('setCollections', mockProds));
      }, 100);
    });
  },
  getSelectedProduct({ commit }) {
    // TODO: move from store to asyncData (remove action and mutaion)?
    const mockProd = {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
      title: "Тестовая страница",
      code: "test_page",
      html: "<table><tr><td>Таблица</td></tr></table>",
      products: [
        {
          id: 1,
          image:
            "https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg",
          title: "Тестовый товар",
          code: "test_product",
          vendor_code: "aezakmi",
          availability: "Много",
          price: 100500.5,
          rating: 4.6,
          tags: [
            {
              id: 1,
              title: "хит",
              color: "yellow",
            },
          ],
          properties: [
            {
              id: 1,
              title: "Стоимость",
              code: "price",
              type: "range",
              value: "500",
              measure: "мг.",
            },
          ],
        },
      ],
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commit('setSelectedProduct', mockProd));
      }, 100);
    });
  },
}
