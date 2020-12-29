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
      // log context di bawah agar lint tidak error saja
      // context disini adalah instance dari component vue
      // memudahkan error handling jika membutuhkan akses ke vuex atau router
      console.log(context)
      alert(error.message)
    }
  },
}
