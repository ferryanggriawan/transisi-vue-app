import actionPlugin from "./action.plugin"

export default {
  methods: {
    async callAction(func) {
      await actionPlugin.callAction(func, this)
    },
  },
}
