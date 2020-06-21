<template>
		<div class="tab-bar-item" @click="itemClick">
			<div v-if="isActive" class="item-icon"><slot  name="icon"></slot></div>
			<div v-else="isActive" class="item-active-icon"><slot  name="active-icon"></slot></div>
			<div class="item-text" :style="activeColor"><slot name="text"></slot></div>
		</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props:{
			link:{
				type: String
			},
			activeStyle:{
				type: String,
				default: 'red'
			}
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.link) === -1
			},
			activeColor(){
				return this.isActive ? {} :{'color': this.activeStyle}
			}
		},
		methods:{
			itemClick(){
		
				//document.title = this.$route.meta.title
				this.$router.push(this.link)
				document.title = this.$route.meta.title
			}
		}
	}
</script>

<style scoped="scoped">
	.tab-bar-item {
		flex: 1;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item img {
		height: 24px;
		width: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>
