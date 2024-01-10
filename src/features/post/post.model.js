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

    static get(id){
        const post = posts.find((p) => p.id == id);
        return post;
    }

    static usersPost(userId){
        const post = posts.find((p) => p.userId == userId);
        return post;
    }

}



let posts = [new PostModel(1, 1, "I am the Best", "http://google.com")];