export const state = () => ({
  city: "Москва"
})

export const mutations = {
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await dispatch("cart/fetchProducts");
    } catch (error) {
      console.error(error)
    }
  }
}
