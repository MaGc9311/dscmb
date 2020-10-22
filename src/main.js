import Vue from "vue";
import App from "./App.vue";
//导入路由模块
import router from "./router/index.js";
//导入LyTab
import LyTab from "ly-tab";
//导入MintUI
import MintUI from "mint-ui";
//导入mint-ui的css文件
import "mint-ui/lib/style.css";
//导入store模块
import store from "@/vuex/store.js";

//使用LyTab
Vue.use(LyTab);
//使用MintUI
Vue.use(MintUI);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
