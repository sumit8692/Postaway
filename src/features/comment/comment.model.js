export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getAllComments(postId) {
        const allCommentsrelatedPostId = comments.filter(c => c.postId == postId);
        return allCommentsrelatedPostId;
    }

    static addComment(userId, postId, content) {
        // Find the post with the given postId
        const post = comments.find(p => p.id == postId);
    
        if (post) {
            // Create a new comment
            const comment = new CommentModel(comments.length + 1, userId, postId, content);
            comments.push(comment); // Assuming comments is an array where you store comments
    
            return null; // Indicate success
        } else {
            return "Post not found";
        }
    }


    static update(id, updatedPost) {
        const postIndex = posts.findIndex((p) => p.id == id &&  p.userId == updatedPost.userId);

        if (postIndex === -1) {
            return null; 
        }

        posts[postIndex] = {
            ...posts[postIndex],
            ...updatedPost,
        };

        return posts[postIndex];
    }

    static deleteComment(postId, userId, id){
        const commentIndex = comments.findIndex( c => c.postId == postId && c.userId == userId && c.id == id);

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