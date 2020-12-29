const key = "transisi_cred"

export default {
  saveCredential(obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  },

  getCredential() {
    const credStr = localStorage.getItem(key)
    const cred = JSON.parse(credStr)

    return cred
  },

  clear() {
    localStorage.removeItem(key)
  },
}
