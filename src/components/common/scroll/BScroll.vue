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
    props:{
      postion:{
        type: Number,
        default: 0
      }
    },
		data(){
			return {
				bs: null
			}
		},
		mounted(){
			this.bs = new Bscroll(this.$refs.wrapp,{
        probeType: this.postion,
        click: true,
        pullUpLoad: true
      });
      this.bs.on("scroll",(postion)=>{
        this.$emit("postion",postion.y)
      });
      this.bs.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
		},
    methods:{
      scrollToPostion(x,y,time=300){
        this.bs.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.bs.finishPullUp()
      }
    }
	}
</script>

<style>
</style>
