<template>
  <v-app>    
    <v-toolbar xs12 sm12 md12>
      <div class="hidden-sm-and-up">
        <v-toolbar-side-icon
          @click.stop="sideNav = !sideNav">
        </v-toolbar-side-icon>
      </div>﻿
      <v-toolbar-title> 
        <router-link 
          to="/" 
          tag="span" 
          style="cursor: pointer">
          News Demo
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>    
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :fixed="fixed" app>
      <v-layout column align-center>
        <span>&copy; 2017</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: false,
        sideNav: false,
        menuItems: [
          { title: 'Home', icon: 'home', link: '/' },
          { title: 'About', icon: 'question_answer', link: '/about' },
          {icon: 'room', title: 'Contact', link: '/contact'},
          {icon: 'edit', title: 'Publish Post', link: '/create'},
          {icon: 'person', title: 'Profile', link: '/profile'}
          // {icon: 'face', title: 'Sign up', link: '/signup'},
          // {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main.styl'
</style>
