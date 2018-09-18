<template>
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
                    <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                    <span class="primary--text">{{ message }}</span>
                    <input 
                        type="file"
                        name="image"
                        style="display: none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked">
                </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Publish Post</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'publish',
  data () {
    return {
      title: '',
      description: '',
      image: '',
      message: ''
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
        description: this.description,
        image: this.image
      })
      this.$router.push({name: 'post'})
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        this.message = 'Kindly pick an image file'
      }
      this.message = 'File added successfully added'
    }
  }
}
</script>
