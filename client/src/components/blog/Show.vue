<template>
    <div class="">
        <Header/>
        <div class="main_container">
            <div class="page_content">
                <span v-show="loading" class="page_message">Loading &hellip;</span>
                <template v-if="this.toggleDialog">
                    <Delete :toggleDialog=toggleDialog @toggleDelete="onToggleDialog"/>
                </template>
                <div class="page_head"><h2 class="page_header"><strong>{{ post.title }}</strong></h2><hr class="scotch-rule"></div>
                <!-- <p class="blog_sub_head"><span><small><b>Posted by Admin</b></small></span><span><small><b>{{ moment(post.timestamp).fromNow() }}</b></small></span></p> -->
                <p class="">{{ post.description }}</p>
                <div style="display: flex; flex-direction: row;">
                    <router-link v-if="!loading" :to="{ name: 'edit', params: { id: $route.params.id }}" class="page_button "><strong>Edit Post</strong></router-link>
                    <button class="page_button" @click.prevent="toggleDialog = !toggleDialog">Delete Post</button>
                </div>
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
import Delete from '@/components/blog/Delete.vue'
export default {
    name: 'show',
    components: {
        Header,
        Sidebar,
        Footer,
        Delete
    },
    props: {
    },
    data () {
        return {
            post: {},
            toggleDialog: false,
            loading: false,
            status: 'No post yet'
        }
    },
    async created () {
        this.populateBlog()
    },
    methods: {
        onToggleDialog () {
            this.toggleDialog = false
        },
        async populateBlog () {
            const response = await BlogService.getBlog({id: this.$route.params.id})
            console.log( response.data)
            this.post = Object.assign({}, response.data.blog)
            // this.post = response.data
            this.loading = false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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