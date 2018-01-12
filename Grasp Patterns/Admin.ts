import Post from './Post';
import Posts from './Posts';

export default class Admin {
    private static _instance:Admin = new Admin();

    private _name : string = "Admin";
    private posts : Posts = Posts.getInstance();

    private constructor() {
        if(Admin._instance){
            throw new Error("Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        Admin._instance = this;
    }

    public static getInstance() : Admin
    {
        return Admin._instance;
    }

    public setName(name: string) {
        this._name = name;
    }
    
    createPost(id: number, title: string, content: string) {
        //let posts = Posts.getInstance();        
        //let post = new Post(title, content);
        //posts.addPost(post);
        this.posts.addPost(id, title, content);
    }

    /*deletePost(post: Post) {
        let posts = Posts.getInstance();
        posts.deletePost(post);
    }*/
    
    deletePost(id: number) {
        //let posts = Posts.getInstance();
        this.posts.deletePost(id);
    }

}