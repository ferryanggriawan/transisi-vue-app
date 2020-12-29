import authAction from "./auth.action"
import authMutation from "./auth.mutation"

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: authMutation,
  actions: authAction,
}
