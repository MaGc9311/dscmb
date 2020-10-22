import { getHomeSwipe } from "@/api/index.js";
import { getGoodsList, getGoodsDetail } from "@/api/list.js";

//actions定义的方法来提交mutations中定义的方法
const actions = {
	actgetcategoryDatas(context, data) {
		context.commit("getcategoryDatas", data);
	},
	async actGetSwipeDatas(context) {
		const result = await getHomeSwipe();
		context.commit("getSwipeDatas", result.data);
	},
	async getGoodsList(context, data) {
		const result = await getGoodsList(data);
		context.commit("getGoodsList", result.data);
	},
	async getGoodsDetail(context, data) {
		const result = await getGoodsDetail(data);
		console.log(result.data);
		context.commit("getGoodsDetail", result.data[0]);
	},
};
export default actions;
