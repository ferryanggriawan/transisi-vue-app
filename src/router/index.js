import Vue from "vue"
import VueRouter from "vue-router"
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

export default router
