"use strict";
exports.__esModule = true;
var Post = /** @class */ (function () {
    function Post(id, title, content) {
        this.id = id;
        this.title = title;
        this.dateOfCreating = (new Date()).toDateString();
        this.content = content;
    }
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getTitle = function () {
        return this.title;
    };
    Post.prototype.setTitle = function (newtitle) {
        this.title = newtitle;
    };
    Post.prototype.getContent = function () {
        return this.content;
    };
    Post.prototype.setContent = function (newcontent) {
        this.content = newcontent;
    };
    Post.prototype.getDate = function () {
        return this.dateOfCreating;
    };
    return Post;
}());
exports["default"] = Post;
