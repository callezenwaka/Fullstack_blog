import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Create from './components/blog/Create.vue'
import Edit from './components/blog/Edit.vue'
import Index from './components/blog/Index.vue'
import Show from './components/blog/Show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blogs', name: 'index', component: Index },
    { path: '/blogs/publish', name: 'create', component: Create },
    { path: '/blogs/:id/edit', name: 'edit', component: Edit },
    { path: '/blogs/:id', name: 'show', component: Show },
    { path: '/career', name: 'career', component: () => import('./views/Career.vue') },
    { path: '/services', name: 'services', component: () => import('./views/Services.vue') },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
