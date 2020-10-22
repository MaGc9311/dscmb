<!--  -->
<template>
	<div class="home-header">
		<header class="header">
			<form action="">
				<input type="text" placeholder="请输入关键字" />
				<i class="iconfont icon-sousuo"></i>
			</form>
			<a href="">登录</a>
		</header>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {};
	},
};
</script>
<style lang="less" scoped>
.home-header {
	width: 100%;
	height: 4.4rem;
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	.header {
		display: flex;
		background-color: #f00;
		form {
			width: 80%;
			position: relative;
			margin-left: 0.5rem;
			input {
				width: 100%;
				height: 3rem;
				border: 1px solid #efefef;
				border-radius: 1.5rem;
				margin-top: 0.7rem;
				box-sizing: border-box;
				font-size: 1.4rem;
				text-indent: 1.5rem;
			}
			i {
				position: absolute;
				right: 1rem;
				width: 4.4rem;
				height: 4.4rem;
				text-align: center;
				line-height: 4.4rem;
				top: 0;
			}
		}
		a {
			display: block;
			font-size: 1.8rem;
			line-height: 4.4rem;
			width: 20%;
			text-align: center;
			color: white;
		}
	}
}
</style>
