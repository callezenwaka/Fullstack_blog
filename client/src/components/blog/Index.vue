<template>
    <div class="">
        <Header/>
        <div class="main_container">
            <div class="page_content">
                <div class="page_head"><h2 class="page_header">Latest News</h2><hr class="scotch-rule"></div>
            </div>
            <Sidebar/>
        </div>        
    </div>
</template>

<script>
import Header from '@/components/partials/Header.vue'
import Sidebar from '@/components/partials/Sidebar.vue'
export default {
    name: 'index',
    components: {
        Header,
        Sidebar
    },
    props: {
    },
    data () {
        return {
            post: []
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