import userAction from "./user.action"
import userMutation from "./user.mutation"

export default {
  namespaced: true,
  state: {
    users: [],
    pagination: null,
    user: null,
  },
  mutations: userMutation,
  actions: userAction,
}
