<template>
	<div id="home">
		<nar-bar class="home-nav-bar">
			<div slot="center">购物街</div>
		</nar-bar>
    <tab-control :titles="['流行','新款','精选']"
    @tabClick="homeTabClick"
    ref="tabControlHidden"
    class="tabControl" v-show="showTabControl"/>
		<b-scroll class="home-content"
      @postion="scrollPostion"
      @pullingUp="loadMore"
      :postion="3"
      ref="bscroll">
			<home-swiper :cbanners="banners" @swiperLoadFished="swiperLoadFished"></home-swiper>
			<home-recommend :crecommends="recommends"></home-recommend>
			<home-feture></home-feture>
			<tab-control :titles="['流行','新款','精选']"
      @tabClick="homeTabClick"
      ref="tabControl"/>
			<goods :goods="showGoods"></goods>
		</b-scroll>
    <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
	</div>
</template>

<script>
	import NarBar from 'components/common/navbar/NavBar.vue'
	import BScroll from 'components/common/scroll/BScroll.vue'
	import TabControl from 'components/content/tabcontrol/TabControl.vue'
	import Goods from 'components/content/good/Goods.vue'
  import BackTop from '../../components/content/backtop/BackTop.vue'

	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeFeture from './childComps/HomeFeture.vue'

	import {getHomeMultidata,getHomeData} from 'network/home.js'
  import {debounce} from 'common/utils.js'
	export default {
		name: 'Home',
		components: {
			NarBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeture,
			TabControl,
			Goods,
			BScroll,
      BackTop
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
				currentIndex: 'pop',
        showBackTop: false,
        showTabControl: false,
        tabControlOffsetTop: 0,
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
    mounted(){
      const refresh = debounce(this.$refs.bscroll.refresh,100)
      this.$bus.$on("imgLoadFinsh",()=>{
        refresh('')
      })
    },
		methods:{

			homeTabClick(index){
				switch(index){
					case 0: this.currentIndex='pop'
						break
					case 1: this.currentIndex='new'
						break
					case 2: this.currentIndex='sell'
						break
				}
        this.$refs.tabControl.concurrentIndex = index
        this.$refs.tabControlHidden.concurrentIndex = index
			},
      backTopClick(){
        this.$refs.bscroll.scrollToPostion(0,0,500)

      },
      scrollPostion(postion){
        //1.显示backTop按钮
        this.showBackTop = -postion>1000
        //2.tabcontrol吸顶
        this.showTabControl = -postion>this.tabControlOffsetTop
      },
      loadMore(){
        this.getHomeData(this.currentIndex)
        console.log(this.$refs.tabControl);
      },
      swiperLoadFished(){
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
			/**
			 * 网络请求
			 */
			getHomeMultidata(){
				getHomeMultidata().then(res =>{
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
			getHomeData(type){
				const page = this.goods[type].page+1;
				getHomeData(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page=page
          this.$refs.bscroll.finishPullUp()
				})
			}

		}
	}
</script>

<style scoped>
	.home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
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
  .tabControl {
    position: relative;
    z-index: 10;
    background-color: #F6F6F6;
  }
</style>
