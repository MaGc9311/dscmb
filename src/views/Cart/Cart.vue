<!--  -->
<template>
	<div class="cart">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
	import Footer from "@/components/Footer";
	import Header from "./components/Header";
	import Content from "./components/Content";

	export default {
		components: {
			Footer,
			Header,
			Content,
		},
		data() {
			return {};
		},
	};
</script>
<style>
	.cart {
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
