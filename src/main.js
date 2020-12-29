import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./app/plugins/vuetify.plugin"
import mixinPlugin from "./app/plugins/mixin.plugin"

Vue.config.productionTip = false

Vue.mixin(mixinPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
