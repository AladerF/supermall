<template>
	<div class="wrapp" ref="wrapp">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'BScroll',
		data(){
			return {
				bs: null
			}
		},
		mounted(){
			this.bs = new Bscroll(this.$refs.wrapp)
		}
	}
</script>

<style>
</style>
