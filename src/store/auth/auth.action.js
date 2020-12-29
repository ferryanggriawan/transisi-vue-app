import authApi from "../../app/api/auth.api"
import actionPlugin from "../../app/plugins/action.plugin"
import storagePlugin from "../../app/plugins/storage.plugin"

export default {
  async login(context, form) {
    await actionPlugin.action(async () => {
      const resp = await authApi.login(form)

      storagePlugin.saveCredential(resp)
      context.commit("setToken", resp.token)
    })
  },

  async register(context, form) {
    await actionPlugin.action(async () => {
      const resp = await authApi.register(form)

      storagePlugin.saveCredential(resp)
      context.commit("setToken", resp.token)
    })
  },
}
