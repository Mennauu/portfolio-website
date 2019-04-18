export const state = () => ({
  currentPage: 'home',
})

export const mutations = {
  SET_PAGE(state, currentPage) {
    state.currentPage = currentPage
  },
  SET_IMAGE(state, image) {
    state.image = image
  }
}