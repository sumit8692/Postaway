// LikeController
import CommentModel from "./comment.model.js";

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

    addComment(req, res){
        const content = req.body;
        const userId = req.userId;
        const postId = req.params.postId;

        const checkAdded = CommentModel.addComment(userId, postId, content);

        if(checkAdded){
            res.status(404).send("Server Error");
        }
        else{
            res.status(200).send("Comment Added");
        }

    }

    delete(req, res){
        const userId = req.userId;
        const commentId = req.query.commentId;
        const postId = req.params.postId;
        const checkDel = CommentModel.deleteComment(postId, userId, commentId);
        if(checkDel){
            return res.status(404).send(checkDel);
        }
        else{
            return res.status(200).send("Post has been removed");
        }
    }

    update(req, res){
        const updatedPost = req.body;
        updatedPost.userId = req.userId;
        const postId = req.params.postId;
        
        const checkupdate = CommentModel.update(postId, updatedPost);

        if(checkupdate==-1){
            return res.status(404).send(checkDel);
        }
        else{
            return res.status(200).send("Comment has been updated");
        }
    }
    
}
