import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = require('views/home/Home').default
const Cart = require('views/cart/Cart').default
const Catgory = require('views/category/Category').default
const Profile = require('views/profile/Profile').default

const routes =[
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		meta:{
			title: '首页'
		}
	},
	{
		path: '/catgory',
		component: Catgory,
		meta: {
			title: '分类'
		}
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			title: '购物车'
		}
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			title: '我的'
		}
	}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router