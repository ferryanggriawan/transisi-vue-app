import storagePlugin from "../../app/plugins/storage.plugin"
import authAction from "./auth.action"
import authMutation from "./auth.mutation"

const cred = storagePlugin.getCredential()

export default {
  namespaced: true,
  state: {
    token: cred?.token,
  },
  mutations: authMutation,
  actions: authAction,
}
