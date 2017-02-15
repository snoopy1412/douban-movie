import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//加载组件
import index from '../views/index.vue'
import list from '../views/list.vue'
import detail from '../views/detail.vue'


const router = new Router({
	routes: [{
		path: '',
		redirect: '/index'
	}, {
		path: '/index',
		component: index
	}, {
		path: '/:type',
		component: list
	}, {
		path: '/coming_soon/detail/:id',
		component: detail
	}, {
		path: '/in_theaters/detail/:id',
		component: detail
	}, {
		path: '/top250/detail/:id',
		component: detail
	}]
})

export default router