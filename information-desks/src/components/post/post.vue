<template>
  <v-app>
    <v-container fluid>
      <v-layout row wrap v-for="post in posts" :key="post.id">
        <v-flex xs12 sm12 md8 offset-md2 class="mb-5">
          <v-card>
            <v-layout>
              <v-flex xs12 sm12 md10 offset-md1>
                <v-card-title>
                  <h2 class="primary--text headline"><b>{{ post.title }}</b></h2>                    
                </v-card-title>
                <v-card-text >
                  <p><b>{{ post.updated_date | date }}</b></p>
                  <div><span class="">{{ post.description }}</span></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat class="primary" :to="'/post/edit/' + post.id ">
                    <v-icon left light>arrow_back</v-icon>
                    Edit                    
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="primary" :to="'/post/' + post._id ">More
                    <v-icon right light>arrow_forward</v-icon>                    
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  // props: ['id'],
  name: 'post',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostService.getPosts()
      this.posts = response.data
    },
    async deletePost (id) {
      await PostService.deletePost(id)
      // this.$router.push({ name: 'post' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .headline {

    text-align: center;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
