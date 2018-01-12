"use strict";
exports.__esModule = true;
var Posts_1 = require("./Posts");
var Admin = /** @class */ (function () {
    function Admin() {
        this._name = "Admin";
        this.posts = Posts_1["default"].getInstance();
        if (Admin._instance) {
            throw new Error("Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        Admin._instance = this;
    }
    Admin.getInstance = function () {
        return Admin._instance;
    };
    Admin.prototype.setName = function (name) {
        this._name = name;
    };
    Admin.prototype.createPost = function (id, title, content) {
        //let posts = Posts.getInstance();        
        //let post = new Post(title, content);
        //posts.addPost(post);
        this.posts.addPost(id, title, content);
    };
    /*deletePost(post: Post) {
        let posts = Posts.getInstance();
        posts.deletePost(post);
    }*/
    Admin.prototype.deletePost = function (id) {
        //let posts = Posts.getInstance();
        this.posts.deletePost(id);
    };
    Admin._instance = new Admin();
    return Admin;
}());
exports["default"] = Admin;
