import Vue from "vue"
import VueRouter from "vue-router"
import storagePlugin from "../app/plugins/storage.plugin"
import authRoute from "./auth.route"
import userRoute from "./user.route"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  ...authRoute,
  ...userRoute,
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const noGuardPath = to.path.includes("/auth")
  const cred = storagePlugin.getCredential()

  if (noGuardPath) {
    if (cred != null) {
      next("/")
    } else {
      next()
    }
  } else {
    if (cred == null) {
      next("/auth/login")
    } else {
      next()
    }
  }
})

export default router
