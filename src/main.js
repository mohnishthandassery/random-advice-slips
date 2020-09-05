import Vue from "vue";
import App from "./App.vue";

//Tailwind
import "./assets/css/tailwind.css";

//Store
import store from "@/store/index.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
