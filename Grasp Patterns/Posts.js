"use strict";
exports.__esModule = true;
var Post_1 = require("./Post");
var Posts = /** @class */ (function () {
    function Posts() {
        this.posts = [];
        if (Posts._instance) {
            throw new Error("Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        Posts._instance = this;
    }
    Posts.getInstance = function () {
        return Posts._instance;
    };
    Posts.prototype.getPosts = function () {
        return this.posts;
    };
    Posts.prototype.countPosts = function () {
        return this.posts.length;
    };
    /*  addPost(post: Post) {
          this.posts.push(post);
      }*/
    Posts.prototype.addPost = function (id, title, content) {
        var post = new Post_1["default"](id, title, content);
        this.posts.push(post);
    };
    /*deletePost(post: Post) {
        let indexPost = this.posts.indexOf(post);
        this.posts.splice(indexPost, 1);
    }*/
    Posts.prototype.deletePost = function (id) {
        var post = this.posts.filter(function (e) { return e.getId() === id; })[0];
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    };
    Posts._instance = new Posts();
    return Posts;
}());
exports["default"] = Posts;
