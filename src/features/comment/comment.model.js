export default class CommentModel {
    constructor(comment_id, userId, postId, comment) {
        this.comment_id = comment_id;
        this.userId = userId;
        this.postId = postId;
        this.content = comment;
    }

    static getAllComments(postId) {
        const allCommentsrelatedPostId = comments.filter(c => c.postId == postId);
        return allCommentsrelatedPostId;
    }

    static addComment(userId, postId, content) {
        // Find the post with the given postId
        const post = comments.find(p => p.id == postId);
    
        if (post) {
            
            const comment = new CommentModel(comments.length + 1, userId, postId, content);
            comments.push(comment); 
    
            return null; // Indicate success
        } else {
            return "Post not found";
        }
    }


    static update(comment_id, updatedPost) {
        const postIndex = posts.findIndex((p) => p.comment_id == comment_id &&  p.userId == updatedPost.userId);

        if (postIndex === -1) {
            return null; 
        }

        posts[postIndex] = {
            ...posts[postIndex],
            ...updatedPost,
        };

        return posts[postIndex];
    }

    static deleteComment(postId, userId, comment_id){
        const commentIndex = comments.findIndex( c => c.postId == postId && c.userId == userId && c.comment_id == comment_id);

        if(commentIndex ==-1){
            return "Comment not found";
        }
        else{
            posts.splice(commentIndex, 1);
        }

    }


}

let comments = [new CommentModel(1, 1, 1, "Mast hai bhai"),
new CommentModel(2, 2, 1, "Mast hai bhai2"),
new CommentModel(3, 3, 1, "Mast hai bhai3"),
new CommentModel(4, 4, 1, "Mast hai bhai4")
];