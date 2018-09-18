<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h4>Publish Post</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form enctype="multipart/form-data" @submit.prevent="onCreatePost">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="description"
                  label="Description"
                  id="description"
                  multi-line
                  v-model="description"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Post</v-btn>
            </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'create',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.description !== ''
    }
  },
  methods: {
    async onCreatePost () {
      if (!this.formIsValid) {
        return
      }
      await PostService.createPost({
        title: this.title,
        description: this.description
      })
      this.$router.push('/')
    }
  }
}
</script>
