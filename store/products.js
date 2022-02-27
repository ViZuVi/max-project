export const state = () => ({
  popularProducts: [],
  collections: [],
  selectedProduct: null,
})

export const mutations = {
  setPopularProducts(state, payload) {
    state.popularProducts = payload;
  },
  setCollections(state, payload) {
    state.collections = payload;
  },
  setSelectedProduct(state, payload) {
    state.selectedProduct = payload;
  },
}

export const actions = {
  getPopularProducts({ commit }) {
    // TODO: to nuxtServerInit?
    const mockProds = [
      {
        id: 1,
        title: "Косуха из натуральной кожи",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 4.4,
        code: "A36955R7",
        price: 16800,
        image: require("~/assets/img/best-product-prime.jpg"),
        brand: {
          id: 1,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        tags: [
          {
            "id": 1,
            "title": "хит",
            "color": "yellow"
          }
        ],
      },
      {
        id: 2,
        title: "Смартфон SY 15",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 3.8,
        price: 36000,
        image: require("~/assets/img/best-product-phone-1.jpg"),
        brand: {
          id: 2,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        deliveryPrice: 390,
        // TODO: description in mocks?
        description:
          "Яркие впечатления возможны даже после прошедших мероприятий. Широкоугольная камера и интеллектуальная система съемки уже наравне с профессиональными камерами!",
        properties: [
          {
            id: 1,
            title: "Стоимость",
            code: "price",
            type: "range",
            value: "500",
            measure: "мг.",
          },
          {
            id: 2,
            title: "Стоимость",
            code: "price",
            type: "range",
            value: "500",
            measure: "мг.",
          },
          {
            id: 3,
            title: "Стоимость",
            code: "price",
            type: "range",
            value: "500",
            measure: "мг.",
          },
          {
            id: 4,
            title: "Стоимость",
            code: "price",
            type: "range",
            value: "500",
            measure: "мг.",
          },
        ],
        tags: [
          {
            id: 1,
            title: "хит",
            color: "yellow"
          }
        ],
      },
      {
        id: 3,
        title: "Смартфон SY 15",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 0,
        code: "A36955R7",
        price: 36000,
        image: require("~/assets/img/best-product-phone-1.jpg"),
        brand: {
          id: 3,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        tags: [
          {
            "id": 1,
            "title": "хит",
            "color": "yellow"
          }
        ],
      },
      {
        id: 4,
        title: "Смартфон SY 15",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 0,
        code: "A36955R7",
        price: 36000,
        image: require("~/assets/img/best-product-phone-1.jpg"),
        brand: {
          id: 4,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        tags: [
          {
            "id": 1,
            "title": "хит",
            "color": "yellow"
          }
        ],
      },
      {
        id: 5,
        title: "Смартфон SY 15",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 0,
        code: "A36955R7",
        price: 36000,
        image: require("~/assets/img/best-product-phone-1.jpg"),
        brand: {
          id: 5,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        tags: [
          {
            "id": 1,
            "title": "хит",
            "color": "yellow"
          }
        ],
      },
      {
        id: 6,
        title: "Смартфон SY 15",
        code: "test_product",
        covendor_code: "aezakmi",
        rating: 0,
        code: "A36955R7",
        price: 36000,
        image: require("~/assets/img/best-product-phone-1.jpg"),
        brand: {
          id: 6,
          title: "vrand",
          image: require("~/assets/img/brands-1.png"),
        },
        availability: "Много",
        tags: [
          {
            "id": 1,
            "title": "хит",
            "color": "yellow"
          }
        ],
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commit('setPopularProducts', mockProds));
      }, 100);
    });
  },
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
