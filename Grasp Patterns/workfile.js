"use strict";
exports.__esModule = true;
var Admin_1 = require("./Admin");
var Posts_1 = require("./Posts");
// try to create two admins 
var admin = Admin_1["default"].getInstance();
var admin2 = Admin_1["default"].getInstance();
// set name for confidence
admin.setName("Vitalii");
// test
console.log(admin); // Vitalii
console.log(admin2); // Vitalii
// admin = admin2! So, singleton works =)
var posts = Posts_1["default"].getInstance();
admin.createPost(1, 'Hello', 'Hello, my name is Vitalii!');
admin.createPost(2, 'Google', 'Google is the most popular search engine!');
console.log(posts.getPosts());
admin.deletePost(1);
console.log(posts.getPosts());
