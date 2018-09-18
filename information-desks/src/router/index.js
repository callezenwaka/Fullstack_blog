import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/post/home'
import post from '@/components/post/post'
import create from '@/components/post/create'
import publish from '@/components/post/publish'
import edit from '@/components/post/edit'
import show from '@/components/post/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/posts',
      name: 'post',
      component: post
    },
    {
      path: '/post/create',
      name: 'create',
      component: create
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/post/edit/:id',
      name: 'edit',
      component: edit
    },
    {
      path: '/post/:id',
      name: 'show',
      component: show
    }
  ],
  mode: 'history'
})
