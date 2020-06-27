<template>
	<div id="recommend">
		<div v-for=" item in crecommends" :key="item.acm" class="recommendItem">
			<a :href="item.link">
				<img :src="item.image"/>
			</a>
			
			<div>{{item.title}}</div>
		</div>
			
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props: {
				crecommends:{ 
						type: Array,
						default() {
							return []
						}
				}
		}
	}
</script>

<style>
	#recommend{
		display: flex;
		text-align: center;
		padding: 5px;
		box-shadow: 0px 1px 1px rgb(100,100,100,0.2);
	}
	.recommendItem {
		flex: 1;
		margin-bottom: 10px;
	}
	.recommendItem img{
		height: 65px;
		width: 70px;
		border-radius: 100%;
		margin-bottom: 10px;
	}
</style>
