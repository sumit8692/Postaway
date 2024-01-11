// LikeModel
export default class LikeModel {
    constructor(postId, userId, isLiked) {
        this.postId = postId;
        this.userId = userId;
        this.isLiked = isLiked;
    }

    static getAll(postId) {
        return likes.filter(l => l.postId == postId);
    }

    static toggleLikes(userId, postId) {
        const existingLike = likes.find(l => l.postId == postId);

        if (existingLike) {
            // If the like already exists, toggle its status
            existingLike.isLiked = !existingLike.isLiked;
            return existingLike.isLiked;
        } else {
            // If the like doesn't exist, create a new one with isLiked set to true
            const newLike = new LikeModel(postId, userId, true);
            likes.push(newLike);
            return true;
        }
    }
}

let likes = [
    new LikeModel(1, true),
    new LikeModel(2, false)
];