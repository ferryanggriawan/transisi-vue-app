import actionPlugin from "./action.plugin"

export default {
  methods: {
    async callAction(func, context) {
      await actionPlugin.callAction(func, context)
    },
  },
}
