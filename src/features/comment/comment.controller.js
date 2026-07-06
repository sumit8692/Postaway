// CommentController
import CommentModel from "./comment.model.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export default class CommentController {

    getAllComments(req, res) {
        try {
            const postId = req.params.postId;
            const comments = CommentModel.getAllComments(postId);

            if (comments.length > 0) {
                res.status(200).json(comments);
            } else {
                res.status(404).json({ message: "No comments found for the specified postId." });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    addComment(req, res) {
        try {
            const { content } = req.body;
            const userId = req.userId;
            const postId = req.params.postId;

            if (!content) {
                return res.status(400).send("content is required");
            }

            const comment = CommentModel.addComment(userId, postId, content);
            return res.status(201).json(comment);
        } catch (err) {
            const status = err.code || 404;
            return res.status(status).send(err.message || "Server Error");
        }
    }

    delete(req, res) {
        try {
            const userId = req.userId;
            const commentId = req.params.commentId;
            CommentModel.deleteComment(userId, commentId);
            return res.status(200).send("Comment deleted successfully");
        } catch (err) {
            const status = err.code || 500;
            return res.status(status).send(err.message || "Server Error");
        }
    }

    update(req, res) {
        try {
            const { content } = req.body;
            const userId = req.userId;
            const commentId = req.params.commentId;

            if (!content) {
                return res.status(400).send("content is required");
            }

            const comment = CommentModel.update(commentId, userId, content);
            return res.status(200).json(comment);
        } catch (err) {
            const status = err.code || 500;
            return res.status(status).send(err.message || "Server Error");
        }
    }
}
