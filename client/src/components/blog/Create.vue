<template>
    <div class="">
        <Header/>      
        <div class="main_container">
            <div class="page_content">
                <div class="page_head"><h2 class="page_header">Publish News</h2><hr class="scotch-rule"></div>
                <form enctype="multipart/form-data" @submit.prevent="onCreatePost">
                    <div class="form-field">
                        <label for="title">Post Title: <span class="page_form_input_required">*</span></label>
                        <input type="text" name="title" value="" v-model="post.title" placeholder="Enter blog title" class="page_form_input" id="title" aria-required="true" aria-invalid="false" required autofocus />
                    </div>
                    <br>
                    <div class="form-field">
                        <label for="description">Post Description  <span class="page_form_input_required">*</span></label>
                        <textarea name="description" v-model="post.description" placeholder="Enter blog description" cols="40" rows="10" class="page_form_input" id="description" aria-required="true" aria-invalid="false"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="form_button" v-bind:class="{ page_button: formIsFilled }" :disabled="!formIsFilled">Publish Post</button>
                    </div>
                    <span class="page_message" v-if="loading">{{ loading }} &hellip;</span>
                    <span class="page_message">{{ status }}</span>
                </form>
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
    name: 'create',
    components: {
        Header,
        Sidebar,
        Footer
    },
    props: {
    },
    data () {
        return {
            post: {
                title: '',
                description: ''
            },
            loading: '',
            status: ''
        }
    },
    computed: {
        formIsFilled () {
            return this.post.title !== '' && this.post.description !== ''
        }
    },
    methods: {
        async onCreatePost () {
            if (!this.formIsFilled) {
                this.loading = 'All the fields are required'
            } else {
                this.loading = 'Sending Post, please wait'
                console.log(this.post)
                await BlogService.createBlog(this.post)
                console.log('Sent successfully')
                this.loading = ''
                this.$router.push({name: 'index'})
            }
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
  border-bottom: 2px solid #1b1c1d;
}
.page_button {
  padding: 5px;
  font-size: 1em;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  background: #1b1c1d;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.9);
}
.page_form_input {
  width: 100%;
  line-height: 1.2em;
  border: none;
  border-bottom: 0.5px solid buttonface;
}
.page_form_input_required {
  color: #D46A6A;
}
.form_button {
  padding: 5px;
  margin: 15px 0;
  font-size: 1em;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  width: 100%;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.9);
  cursor: pointer;
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