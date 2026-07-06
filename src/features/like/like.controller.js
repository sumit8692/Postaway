// LikeController
import LikeModel from "./like.model.js";
import UserModel from "../user/user.model.js";

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
        const postId = req.params.postId;
        const rawLikes = LikeModel.getAll(postId);
        const users = UserModel.getAll();
        
        const mappedLikes = rawLikes.map(like => {
            const user = users.find(u => u.userId == like.userId);
            return {
                userId: like.userId,
                userName: user ? user.name : "Unknown User"
            };
        });

        return res.status(200).json({
            postWithLike: {
                postId: postId,
                likes: mappedLikes
            }
        });
    }
}