export const state = () => ({
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
