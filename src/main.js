import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./app/plugins/vuetify.plugin"
import mixinPlugin from "./app/plugins/mixin.plugin"

import "./components/global/global.component"

Vue.mixin(mixinPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
