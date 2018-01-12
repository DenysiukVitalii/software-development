import Admin from './Admin';
import Post from './Post';
import Posts from './Posts';

// try to create two admins 
let admin = Admin.getInstance();
let admin2 = Admin.getInstance();
// set name for confidence
admin.setName("Vitalii");

// test
console.log(admin); // Vitalii
console.log(admin2); // Vitalii
// admin = admin2! So, singleton works =)


let posts = Posts.getInstance();
admin.createPost(1, 'Hello', 'Hello, my name is Vitalii!');
admin.createPost(2, 'Google', 'Google is the most popular search engine!');
console.log(posts.getPosts());

admin.deletePost(1);
console.log(posts.getPosts());





