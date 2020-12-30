import userApi from "../../app/api/user.api"
import actionPlugin from "../../app/plugins/action.plugin"

export default {
  async browse(context, params = {}) {
    await actionPlugin.action(async () => {
      const resp = await userApi.browse(params)
      context.commit("setUsers", resp)
    })
  },

  async read(context, id) {
    await actionPlugin.action(async () => {
      const resp = await userApi.read(id)
      context.commit("setUser", resp)
    })
  },

  async edit(context, payload) {
    await actionPlugin.action(async () => {
      const { id, form } = payload
      await userApi.edit(id, form)
    })
  },

  async add(context, form) {
    await actionPlugin.action(async () => {
      await userApi.add(form)
    })
  },

  async delete(context, id) {
    await actionPlugin.action(async () => {
      await userApi.delete(id)
    })
  },
}
