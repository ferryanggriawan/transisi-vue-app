export default {
  async rest(func) {
    try {
      return await func()
    } catch (error) {
      throw error
    }
  },

  async action(func) {
    try {
      await func()
    } catch (error) {
      throw error
    }
  },

  async callAction(context, func) {
    try {
      await func()
    } catch (error) {
      throw error
    }
  },
}
