<template>
  <div id="app">
		<router-view></router-view>
		<TabBar>
			<TabBarItem link="/home" activeStyle="yellow">
				<img slot="icon"  src="./assets/img/tabbar/home.svg"/>
				<img slot="active-icon"  src="./assets/img/tabbar/home_active.svg"/>
				<div slot="text">首页</div>
			</TabBarItem>
			<TabBarItem link="/catgory">
				<img slot="icon"  src="./assets/img/tabbar/catgory.svg"/>
				<img slot="active-icon"  src="./assets/img/tabbar/catgory_active.svg"/>
				<div slot="text">分类</div>
			</TabBarItem>
			<TabBarItem link="cart">
				<img slot="icon"  src="./assets/img/tabbar/cart.svg"/>
				<img slot="active-icon"  src="./assets/img/tabbar/cart-active.svg"/>
				<div slot="text">购物车</div>
			</TabBarItem>
			<TabBarItem link="profile">
				<img slot="icon"  src="./assets/img/tabbar/profile.svg"/>
				<img slot="active-icon"  src="./assets/img/tabbar/proflie-active.svg"/>
				<div slot="text">我的</div>
			</TabBarItem>
		</TabBar>	
		
  </div>
	
</template>

<script>

import TabBar from  './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
		TabBar,
		TabBarItem
	
  }
}
</script>

<style>

</style>
