<template>
    <div class="">
        <Header/>
        <div class="main_container">
            <div class="page_content">
                <div class="page_head"><h2 class="page_header">Latest News</h2><hr class="scotch-rule"></div>
                <div v-show="loading" class="blog_container">
                    <span class="page_message">Loading &hellip;</span>
                </div>
                <div class="blog_container" v-if="blogLength" v-for="post in posts" :key="post._id">
                    <p class="blog_header"><strong>{{ post.title }}</strong></p><hr>
                    <!-- <p class="blog_sub_head"><span><small><b>Posted by Admin</b></small></span><span><small><b>{{ moment(post.timestamp).fromNow() }}</b></small></span></p> -->
                    <!-- <p class="blog_sub_head"><span><small><b>Posted by Admin</b></small></span><span><small><b>{{ moment(post.timestamp).calendar() }}</b></small></span></p> -->
                    <p class="">{{ post.description }}</p>
                    <router-link :to="{ name: 'show', params: { id: post._id }}" class="blog_details"><strong>Read more &hellip;</strong></router-link>
                </div>
                <div class="blog_container" v-else><h2 class="page_message">{{ status }}</h2></div>
            </div>
            <Sidebar/>
        </div>
        <Footer/>   
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
import Sidebar from '@/components/partials/Sidebar.vue'
export default {
    name: 'index',
    components: {
        Header,
        Sidebar,
        Footer
    },
    props: {
    },
    data () {
        return {
            posts: [],
            loading: false,
            status: 'No post yet'
        }
    },
    computed: {
        blogLength () {
            if (!this.posts.length > 0) {
                return false
            }
            return true
        }
    },
    mounted () {
        this.refreshBlogs()
    },
    methods: {
        async refreshBlogs () {
            this.loading = true
            const response = await BlogService.getBlogs()
            console.log(response.data)
            this.posts = response.data
            this.loading = false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog_container {
  max-width: 90%;
  padding: 15px;
  margin: 15px auto;
  background-color: #f4f4f4;
}
.blog_header {
  text-align: center;
  text-transform: uppercase;
  margin: 8px 0;
}
.blog_details {
  color: #000000;
  font-weight: bold;
  line-height: 2em;
  font-style: normal;
}
.blog_content {
  padding: 0 10px 10px 10px;
}
.scotch-rule:first-child {
    margin: 0 0 6px;
}
.scotch-rule {
    border-left: none;
    border-right: none;
}
.scotch-rule {
    box-sizing: content-box;
    content: '';
    display: block;
    border-top: 2px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    height: 1px;
    margin: 15px 0;
    background-color: #fff;
    margin-top: 12px;
    margin-bottom: 12px;
}
/* button {
  background-color: #42b983;
} */
</style>