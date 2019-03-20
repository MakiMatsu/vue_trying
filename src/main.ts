import Vue from "vue";
import App from "./App.vue";
import Mytext from "./components/MyText.vue";

Vue.config.productionTip = false;

let v = new Vue({
  render: h => h(App)
}).$mount("#app");

let v2 = new Vue({
  render: h => h(Mytext)
}).$mount("#mytext");
