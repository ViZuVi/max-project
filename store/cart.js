export const state = () => ({
  products: [],
});

export const mutations = {
  SET_CART_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_NEW_QUANTITY(state, { value, id }) {
    const index = state.products.findIndex(item => item.id === id);
    state.products[index].quantity = value;
  },
  DELETE_PRODUCT(state, id) {
    const index = state.products.findIndex(item => item.id === id);
    state.products.splice(index, 1);
  },
  CLEAR_CART(state) {
    state.products = [];
  }
};

export const actions = {
  fetchProducts({ commit }) {
    // return await this.$axios.$get('...').then(() => {})
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockCart = [
          {
            id: 1,
            title: "Смартфон SY 15",
            priceType: "Цена в Москве",
            hit: true,
            discount: 10,
            quantity: 1,
            userPrice: 35820.28,
            price: 36000,
            category: "electronics",
            subCategory: "phones",
            image: require("~/assets/img/best-product-phone-1.jpg"),
            saving: 127,
          },
        ]
        resolve(
          commit("SET_CART_PRODUCTS", mockCart)
        )
      }, 1)
    })

  },
  changeProductQuantity({ commit }, payload) {
    commit("SET_NEW_QUANTITY", payload);
  },
  deleteProduct({ commit }, payload) {
    // axios.delete(".....")
    commit("DELETE_PRODUCT", payload);
  },
  clearCart({ commit }) {
    // axios.delete(".....")
    commit("CLEAR_CART");
  }
};

export const getters = {
  productsQuantity: (state) => state.products.length,
};
