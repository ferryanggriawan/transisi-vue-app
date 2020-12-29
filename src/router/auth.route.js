export default [
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
]
