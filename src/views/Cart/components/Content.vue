<!--  -->
<template>
	<div class="content">
		<div class="cart-content">
			<ul>
				<li>
					<div class="goods-select" @click="changSelectFn">
						<i class="iconfont icon-31xuanzhong" v-if="changSelect"></i>
						<i class="iconfont icon-weixuanzhongyuanquan" v-else style="color: #333;"></i>
					</div>
					<div class="goods-content">
						<img src="" alt="">
						<div class="right">
							<p class="goods-title">标题标题标题标题标题标题标题标题标题标题标题标题</p>
							<div class="goods-bottom">
								<div class="goods-price">2000</div>
								<div class="goods-num">
									<button class="add">+</button>
									<input type="text" value="1">
									<button class="add">-</button>
								</div>
								<div class="iconfont icon-shoucang1"></div>
								<div class="iconfont icon-delete" style="margin-left: 0.5rem;"></div>
							</div>
						</div>
					</div>
				</li>
			</ul>

		</div>
		<div class="cart-bottom">
			<div class="select-all" @click="changSelectAllFn">
				<div class="iconfont icon-31xuanzhong" v-if="changSelectAll"><span>全选</span></div>
				<div class="iconfont icon-weixuanzhongyuanquan" v-else style="color: #333;"><span>全选</span></div>
			</div>
			<div class="goods-total-price">
				<p>合计：<span class="sum">2000</span></p>
				<p>（不含运费，已节省<span class="save">0.00</span>）</p>
			</div>
			<div>
				<button class="close">去结算（<span>1</span>）</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				changSelectAll: true,
				changSelect: true
			};
		},

		methods: {
			changSelectFn() {
				this.changSelect = !this.changSelect
			},

			changSelectAllFn() {
				this.changSelectAll = !this.changSelectAll
			}
		}
	};
</script>
<style lang="less">
	.content {
		width: 100%;
		position: relative;
		top: 5rem;

		.cart-content {
			ul {
				width: 100%;
				height: 100%;
				box-sizing: border-box;

				li {
					position: relative;
					width: 100%;
					height: 10rem;
					box-sizing: border-box;
					display: flex;

					.goods-select {
						width: 10%;
						height: 10rem;
						line-height: 10rem;
						text-align: center;

						.iconfont {
							color: red;
							font-size: 2rem;
						}
					}

					.goods-content {
						width: 83%;
						height: 8rem;
						padding: 1rem;
						border-radius: 5px;
						background-color: #efefef;

						img {
							width: 7rem;
							height: 7rem;
							float: left;
							background-color: red;
							margin-top: 0.5rem;
						}

						.right {
							width: 23rem;
							float: right;

							p {
								height: 1.2rem;
								line-height: 2.4rem;
								font-size: 1.2rem;
							}

							.goods-bottom {
								display: flex;
								height: 2rem;
								margin-top: 4rem;

								.goods-price {
									font-size: 1.6rem;
									color: red;
									margin-right: 5rem;

									&::before {
										content: "￥";
										font-size: 1.4rem;
									}
								}

								.goods-num {
									width: 9rem;
									float: right;
									height: 2rem;
									text-align: center;
									margin-right: 1rem;


									button {
										font-style: normal;
										border: 1px solid #ccc;
										width: 2rem;
										display: inline-block;
										background-color: #fff;
										line-height: 2rem;
									}

									input {
										width: 3rem;
										height: 2rem;
										text-align: center;
										border: 1px solid #ccc;
										line-height: 2rem;

									}
								}

								.iconfont {
									width: 2rem;
									height: 2rem;
									line-height: 2rem;
									text-align: center;
								}
							}
						}

					}
				}
			}
		}




		.cart-bottom {
			width: 100%;
			height: 4.9rem;
			border: 1px solid #ccc;
			position: fixed;
			bottom: 5rem;

			.select-all {
				.iconfont {
					width: 20%;
					height: 4.9rem;
					line-height: 4.9rem;
					text-align: center;
					font-size: 2rem;
					color: red;
					float: left;
					margin-right: 1rem;

					span {
						margin-left: 1rem;
						color: #333;
						font-size: 1.6rem;
					}
				}
			}


			.goods-total-price {
				width: 45%;
				height: 4.9rem;
				float: left;

				p {
					font-size: 1.4rem;
					height: 2.45rem;
					line-height: 2.45rem;
					text-align: right;
					white-space: nowrap;

					.sum {
						color: red;
						font-size: 1.6rem;

						&::before {
							content: "￥";

						}
					}

					.save {
						color: red;
						font-size: 1.2rem;

						&::before {
							content: "￥";
						}

					}
				}
			}

			.close {
				width: 30%;
				height: 4.9rem;
				line-height: 4.9rem;
				text-align: center;
				float: right;
				background-color: #f00;
				color: #fff;
			}
		}
	}
</style>
