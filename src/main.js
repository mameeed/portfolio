import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/sass/common.scss";

import CompButton from "@/components/compButton.vue";
import CompTitle from "@/components/compTitle.vue";


Vue.config.productionTip = false;
Vue.component("CompButton", CompButton);
Vue.component("CompTitle", CompTitle);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
