//mutations里面定义的方式是用来修改state
const mutations = {
	getcategoryDatas(state, data) {
		state.categoryDatas = data;
	},
	getSwipeDatas(state, data) {
		state.swipeDatas = data;
	},
	getGoodsList(state, data) {
		state.goodsLists = data;
	},
	getGoodsDetail(state, data) {
		state.goodsDetails = data;
	},
};
export default mutations;
