export default {
  setUsers(state, payload) {
    state.users = payload.data
    state.pagination = {
      page: payload.page,
      per_page: payload.per_page,
      total: payload.total,
      total_pages: payload.total_pages,
    }
  },

  setUser(state, payload) {
    state.user = payload.data
    state.user.name = `${payload.data.first_name} ${payload.data.last_name}`
  },

  reset(state) {
    state.users = []
    state.pagination = null
    state.user = null
  },
}
