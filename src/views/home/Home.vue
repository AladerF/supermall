<template>
	<div id="home">
		<nar-bar class="home-nav-bar">
			<div slot="center">购物街</div>
		</nar-bar>
		<b-scroll class="home-content">
			<home-swiper :cbanners="banners"></home-swiper>
			<home-recommend :crecommends="recommends"></home-recommend>
			<home-feture></home-feture>
			<tab-control :titles="['流行','新款','精选']" @tabClick="homeTabClick"/>
			<goods :goods="showGoods"></goods>
		</b-scroll>
	</div>
</template>

<script>
	import NarBar from 'components/common/navbar/NavBar.vue'
	import BScroll from 'components/common/scroll/BScroll.vue'
	import TabControl from 'components/content/tabcontrol/TabControl.vue'
	import Goods from 'components/content/good/Goods.vue'
	
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeFeture from './childComps/HomeFeture.vue'
	
	import {getHomeMultidata,getHomeData} from 'network/home.js'
	export default {
		name: 'Home',
		components: {
			NarBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeture,
			TabControl,
			Goods,
			BScroll
		},
		data(){
			return {
				banners: [],
				recommends: [],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentIndex: 'pop'
			}
		},	
		computed:{
			showGoods() {
				return this.goods[this.currentIndex].list
			}
		},
		created() {
			this.getHomeMultidata()
			
			this.getHomeData('pop')
			this.getHomeData('new')
			this.getHomeData('sell')
		},
		methods:{
			
			homeTabClick(index){
				console.log("================",index)
				switch(index){
					case 0: this.currentIndex='pop'
						break
					case 1: this.currentIndex='new'
						break
					case 2: this.currentIndex='sell'
						break
				}
				console.log("================",this.currentIndex)
			},
			/**
			 * 网络请求
			 */
			getHomeMultidata(){
				getHomeMultidata().then(res =>{
					console.log(res)
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
					console.log(this.recommends)
				})
			},
			getHomeData(type){
				console.log(type)
				const page = this.goods[type].page+1;
				getHomeData(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page=page
					console.log(res)
				})	
			}
			
		}
	}
</script>

<style scoped>
	.home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }
	.home-content {
		/* height: 100px; */
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		right: 0;
		left: 0;
	}
</style>
