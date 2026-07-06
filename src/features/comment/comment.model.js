import PostModel from "../post/post.model.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

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
        const post = PostModel.get(postId);
        if (!post) {
            throw new ApplicationError("Post not found", 404);
        }
        const comment = new CommentModel(comments.length + 1, userId, postId, content);
        comments.push(comment);
        return comment;
    }

    static update(commentId, userId, content) {
        const commentIndex = comments.findIndex(c => c.comment_id == commentId);
        if (commentIndex === -1) {
            throw new ApplicationError("Comment not found", 404);
        }
        if (comments[commentIndex].userId != userId) {
            throw new ApplicationError("Unauthorized to update this comment", 403);
        }
        comments[commentIndex].content = content;
        return comments[commentIndex];
    }

    static deleteComment(userId, commentId) {
        const commentIndex = comments.findIndex(c => c.comment_id == commentId);
        if (commentIndex === -1) {
            throw new ApplicationError("Comment not found", 404);
        }
        if (comments[commentIndex].userId != userId) {
            throw new ApplicationError("Unauthorized to delete this comment", 403);
        }
        comments.splice(commentIndex, 1);
    }
}

let comments = [
    new CommentModel(1, 1, 1, "Mast hai bhai"),
    new CommentModel(2, 2, 1, "Mast hai bhai2"),
    new CommentModel(3, 1, 1, "Mast hai bhai3"),
    new CommentModel(4, 1, 1, "Mast hai bhai4")
];