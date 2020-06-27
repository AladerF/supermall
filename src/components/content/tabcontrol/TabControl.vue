<template>
	<div class="tab-control">
		<div v-for=" (title,index) in titles" 
			:key="title"
			class="tab-bar-item" 
			@click="tabClick(index)">
			<span :class="{active:index==concurrentIndex}">{{title}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props:{
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data(){
			return {
				concurrentIndex: 0
			}
		},
		methods:{
			tabClick(index){
				this.concurrentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-control {
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	.tab-bar-item{
		flex: 1;
	}
	.active {
		border-bottom: 2px solid var(--color-tint);
		color: var(--color-high-text);
	}
	.tab-bar-item span{
		padding: 5px;
	}
</style>
