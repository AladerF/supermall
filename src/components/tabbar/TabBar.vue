<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar',
	}
</script>

<style scoped="scoped">
	#tab-bar {
		/*利用flex布局*/
		display: flex;
		text-align: center;
		/*本身样式*/
		background-color: #f6f6f6;
		height: 49px;
		border-top: 1px solid #eee;
		box-shadow: 0px -1px 1px rgb(150,150,150,08);
		/*定位相关*/
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
