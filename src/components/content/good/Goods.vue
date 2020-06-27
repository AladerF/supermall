<template>
	<div class="goods">
		<goods-item v-for="good in goods" :goodItem="good"></goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: 'Goods',
		props: {
			goods: {
				type: Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsItem
		}
	}
</script>

<style>
	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>
