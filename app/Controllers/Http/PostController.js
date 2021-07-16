'use strict'

const Post = use('App/Models/Post');

class PostController {
  async index({ view }) {
    const posts = await Post.all()

    return view.render('posts.index', {
      title: 'latest post',
      posts: posts.toJSON(),
    });
  }

  async details({ params, view }) {
    const post = await Post.find(params.id)
    return view.render('posts.details', {
      post: post
    })
  }
}

module.exports = PostController
