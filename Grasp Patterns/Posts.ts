import Post from './Post';

export default class Posts {
    private static _instance:Posts = new Posts();
    private posts: Post[];
    
    constructor() {
        this.posts = [];
        if(Posts._instance){
            throw new Error("Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        Posts._instance = this;
    }
 
    public static getInstance() : Posts
    {
        return Posts._instance;
    }

    getPosts() {
        return this.posts;
    }

    countPosts() {
        return this.posts.length;
    }

  /*  addPost(post: Post) {
        this.posts.push(post);
    }*/
    addPost(id: number, title: string, content: string) {
        let post = new Post(id, title, content);
        this.posts.push(post);
    }

    /*deletePost(post: Post) {
        let indexPost = this.posts.indexOf(post);
        this.posts.splice(indexPost, 1);
    }*/

    deletePost(id: number) {
        let post = this.posts.filter(e => e.getId() === id)[0];
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    }
}