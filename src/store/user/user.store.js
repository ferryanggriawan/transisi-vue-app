import userAction from "./user.action"
import userMutation from "./user.mutation"

export default {
  namespaced: true,
  state: {
    users: [],
    pagination: null,
    user: null,
  },
  getters: {
    name: (state) => {
      if (state.user != null) {
        return `${state.user.first_name} ${state.user.last_name}`
      } else {
        return ""
      }
    },
  },
  mutations: userMutation,
  actions: userAction,
}
