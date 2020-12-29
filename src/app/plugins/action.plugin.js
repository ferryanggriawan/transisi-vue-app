export default {
  async rest(func) {
    try {
      return await func()
    } catch (error) {
      throw new Error(`${error.response.status}`)
    }
  },

  async action(func) {
    try {
      await func()
    } catch (error) {
      throw new Error("Failed to proses action store")
    }
  },

  async callAction(context, func) {
    try {
      await func()
    } catch (error) {
      return
    }
  },
}
