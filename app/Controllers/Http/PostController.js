//jshint ignore: start
"use strict";

const Post = use("App/Models/Post");

class PostController {
  //*---------------------> Index function
  async index({ request, response, view }) {
    const posts = await Post.all();

    return view.render("posts.index", { posts: posts.rows });
  }

  //*---------------------> Create function
  create({ request, response, view }) {
    return view.render("posts.create");
  }

  //*---------------------> Business logic for create function
  async store({ request, response, view, session }) {
    const post = new Post();

    post.title = request.input("title");
    post.content = request.input("content");
    await post.save();

    session.flash({ notification: "Data berhasil disimpan!" });
    return response.route("posts.index");
  }

  //*---------------------> Update function
  async edit({ request, response, view, params }) {
    const id = params.id;
    const post = await Post.find(id);

    return view.render("posts.edit", { post: post });
  }

  //*---------------------> Business logic for update function
  async update({ request, response, view, params, session }) {
    const id = params.id;
    const post = await Post.find(id);

    post.title = request.input("title");
    post.content = request.input("content");
    await post.save();

    session.flash({ notification: "Data berhasil diubah!" });
    return response.route("posts.index");
  }

  //*---------------------> Delete function
  async delete({ request, response, view, params, session }) {
    const id = params.id;
    const post = await Post.find(id);
    await post.delete();

    session.flash({ notification: "Data berhasil dihapus!" });
    return response.route("posts.index");
  }
}

module.exports = PostController;
