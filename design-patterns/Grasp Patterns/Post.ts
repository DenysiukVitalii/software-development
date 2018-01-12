export default class Post {
    private id: number;
    private title: string;
    private dateOfCreating: String;
    private content: string;

    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.dateOfCreating = (new Date()).toDateString();
        this.content = content;
    }
    
    getId() {
        return this.id;
    }
        
    getTitle() {
        return this.title;
    }

    setTitle(newtitle) {
        this.title = newtitle;
    }

    getContent() {
        return this.content;
    }

    setContent(newcontent) {
        this.content = newcontent;
    }

    getDate() {
        return this.dateOfCreating;
    }
}