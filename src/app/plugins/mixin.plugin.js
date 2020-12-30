import actionPlugin from "./action.plugin"
import storagePlugin from "./storage.plugin"

export default {
  methods: {
    async callAction(func) {
      await actionPlugin.callAction(func, this)
    },

    logout() {
      storagePlugin.clear()
      this.$store.commit("auth/reset")
      this.$router.replace("/auth/login")
    },
  },
}
