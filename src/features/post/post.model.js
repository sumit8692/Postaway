export default class PostModel{
    constructor(id, userId, caption, imageUrl){
        this.id= id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static getall(){
        return posts;
    }

    static add(post){
        post.id = posts.length + 1;
        return post
    }

}



let posts = [new PostModel(1, 1, "I am the Best", "http://google.com")];