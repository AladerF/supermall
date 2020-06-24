<template>
	<div id="home">
		<nar-bar>
			<div slot="center">购物街</div>
		</nar-bar>
	</div>
</template>

<script>
	import NarBar from 'components/common/navbar/NavBar.vue'
	import {getHomeMultidata} from 'network/home.js'
	export default {
		name: 'Home',
		components: {
			NarBar
		},
		created() {
			getHomeMultidata().then(res =>{
				console.log(res)
			})
		}
	}
</script>

<style>
	#home{
		background-color: #FF8198;
	}
</style>
