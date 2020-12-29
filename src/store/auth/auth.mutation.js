export default {
  setToken(state, payload) {
    state.token = payload
  },

  reset(state) {
    state.token = null
  },
}
