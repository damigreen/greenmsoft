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

  async add({ view }) {
    return view.render('posts.add')
  }

  async store({ request, response, session }) {
    const post = new Post();

    post.title = request.input('title')
    post.body = request.input('body')

    await post.save()

    session.flash({ notification: 'Success: Post Added!' })

    return response.redirect('/posts')
  }
}

module.exports = PostController
