import Api from '@/services/Api'

export default {
  getBlogs () {
    return Api().get('blogs')
  },
  createBlog (params) {
    return Api().post('blogs', params)
  },
  updateBlog (params) {
    return Api().put('blogs/' + params.id, params)
  },
  getSingleBlog (params) {
    return Api().get('blogs/' + params.id)
  },
  deleteBlog (_id) {
    return Api().delete('blogs/' + _id)
  }
}
