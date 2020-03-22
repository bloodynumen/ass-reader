import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  template: "<App/>"
}).$mount("#app")
