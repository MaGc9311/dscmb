//引入
import Vue from "vue";
import VueRouter from "vue-router";

//使用
Vue.use(VueRouter);
//创建组件
import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Search from "../views/Search/Search.vue";
import Cart from "../views/Cart/Cart.vue";
import Mine from "../views/Mine/Mine.vue";
//配置首页子路由
import Index from "../views/Home/children/Index.vue";
import Ele from "../views/Home/children/Ele.vue";
import Person from "../views/Home/children/Person.vue";
import Box from "../views/Home/children/Box.vue";
import Phone from "../views/Home/children/Phone.vue";
import Computer from "../views/Home/children/Computer.vue";
import House from "../views/Home/children/House.vue";
import Face from "../views/Home/children/Face.vue";
//个人页面子路由
import Register from "../views/Mine/components/Register.vue";
import Forget from "../views/Mine/components/Forget.vue";
import LoginMobile from "../views/Mine/components/LoginMobile.vue";
//列表详情
import ListDetail from "../views/Category/components/ListDetail";
import GoodsDetail from "../views/GoodsDetail/GoodsDetail.vue";
//配置路由

const routes = [
	{
		path: "/home",
		name: "home",
		component: Home,
		children: [
			{
				path: "index",
				component: Index,
			},
			{
				path: "ele",
				component: Ele,
			},
			{
				path: "person",
				component: Person,
			},
			{
				path: "box",
				component: Box,
			},
			{
				path: "phone",
				component: Phone,
			},
			{
				path: "computer",
				component: Computer,
			},
			{
				path: "house",
				component: House,
			},
			{
				path: "face",
				component: Face,
			},
			{
				path: "/home",
				redirect: "/home/index",
			},
		],
	},
	{
		path: "/category/:cid", //动态路由
		name: "category",
		component: Category,
	},
	{
		path: "/search",
		name: "search",
		component: Search,
	},
	{
		path: "/cart",
		name: "cart",
		component: Cart,
	},
	{
		path: "/mine",
		name: "mine",
		component: Mine,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/forget",
		name: "forget",
		component: Forget,
	},
	{
		path: "/loginMobile",
		name: "loginMobile",
		component: LoginMobile,
	},
	{
		path: "/listdetail",
		name: "listdetail",
		component: ListDetail,
	},
	{
		path: "/goodsdetail",
		name: "goodsdetail",
		component: GoodsDetail,
	},
	{
		path: "/",
		redirect: "/home",
	},
];

//实例化一个路由对象
const router = new VueRouter({
	routes,
});

//暴露
export default router;
