export default class LikeModel{
    constructor(id, userId, postId){
        this.id= id;
        this.userId = userId;
        this.postId = postId;
    }

    static getall(){
        return likes;
    }

    static addLikes(post){
        
    }

}



let likes = [];