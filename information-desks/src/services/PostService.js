import Api from '@/services/Api'

export default {
  getPosts () {
    return Api().get('posts')
  },
  createPost (params) {
    return Api().post('posts', params)
  },
  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },
  getSinglePost (params) {
    return Api().get('posts/' + params.id)
  },
  deletePost (_id) {
    return Api().delete('posts/' + _id)
  }
}
