export default class CommentModel{
    constructor(id, userId, postId, content){
        this.id= id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getall(){
        return comments;
    }

    static addcomment(post){
        
    }

}



let comments = [];