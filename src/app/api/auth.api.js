import http from "../plugins/http.plugin"
import actionPlugin from "../plugins/action.plugin"

export default {
  async login(form) {
    return await actionPlugin.rest(async () => {
      await http.post("/login", form)
      return
    })
  },

  async register(form) {
    return await actionPlugin.rest(async () => {
      await http.post("/register", form)
      return
    })
  },
}
