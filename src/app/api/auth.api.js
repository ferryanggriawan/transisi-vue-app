import http from "../plugins/http.plugin"
import actionPlugin from "../plugins/action.plugin"

export default {
  async login(form) {
    return await actionPlugin.rest(async () => {
      const resp = await http.post("/login", form)
      return resp.data
    })
  },

  async register(form) {
    return await actionPlugin.rest(async () => {
      const resp = await http.post("/register", form)
      return resp.data
    })
  },
}
