// LikeController
import LikeModel from "./like.model.js";

export default class LikeController {

    toggle(req, res) {
        const postId = req.params.postId;
        const userId = req.userId;

        if (!postId) {
            return res.status(400).send("postId is required");
        }

        const isLiked = LikeModel.toggleLikes(userId, postId);

        const response = {
            message: `Like status toggled for postId ${postId} by userId ${userId}`,
            isLiked: isLiked,
        };

        res.status(201).json(response);
    }

    get(req, res) {
        const postId = reqss.params.postId;
        const postWithLike = LikeModel.getAll(postId);
        return res.status(200).send(postWithLike);
    }
}