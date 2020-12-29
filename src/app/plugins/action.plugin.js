export default {
  async rest(func) {
    try {
      return await func()
    } catch (error) {
      const err = new Error(error.response.data.error)
      err.status = error.response.status
      throw err
    }
  },

  async action(func) {
    try {
      await func()
    } catch (error) {
      if (error.status != undefined) {
        throw error
      } else {
        throw new Error("Store Error")
      }
    }
  },

  async callAction(func, context) {
    try {
      await func()
    } catch (error) {
      if (error.status == 401) {
        alert("token expired")
        context.$router.replace("/auth/login")
      } else {
        alert(error.message)
      }
    }
  },
}
