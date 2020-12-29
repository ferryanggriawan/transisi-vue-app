import actionPlugin from "../plugins/action.plugin"
import http from "../plugins/http.plugin"

export default {
  async browse(params) {
    return await actionPlugin.rest(async () => {
      const resp = await http.get("/users", { params })
      return resp.data
    })
  },

  async read(id) {
    return await actionPlugin.rest(async () => {
      const resp = await http.get(`/users/${id}`)
      return resp.data
    })
  },

  async edit(id, form) {
    return await actionPlugin.rest(async () => {
      const resp = await http.put(`/users/${id}`, form)
      return resp.data
    })
  },

  async add(form) {
    return await actionPlugin.rest(async () => {
      const resp = await http.post("/users", form)
      return resp.data
    })
  },

  async delete(id) {
    return await actionPlugin.rest(async () => {
      const resp = await http.delete(`/users/${id}`)
      return resp.data
    })
  },
}
