import UserModel from "../user/user.model.js";

export default class PostModel {
    constructor(id, userId, caption, imageUrl) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.comments = [];
    }

    static getAll() {
        return posts;
    }

    static add(post) {
        post.id = posts.length + 1;
        posts.push(post);
        return post;
    }

    static get(id) {
        const post = posts.find((p) => p.id == id);
        return post;
    }

    static usersPost(userId) {
        const userPosts = posts.filter((p) => p.userId == userId);
        return userPosts;
    }

    static commentOnPost(userId, postId, comment) {
        const user = UserModel.getAll().find((u) => u.userId == userId);
        if (!user) {
            return "User not found";
        }

        const post = posts.find((p) => p.id == postId);

        if (!post) {
            return "Post not found";
        }

        post.comments.push({
            userId: userId,
            comment: comment
        });
        return;
    }

    static update(id, updatedPost) {
        const postIndex = posts.findIndex((p) => p.id == id);

        if (postIndex === -1) {
            return null; 
        }

        posts[postIndex] = {
            ...posts[postIndex],
            ...updatedPost,
        };

        return posts[postIndex];
    }

    static deletePost(postId, userId){
        const postIndex = posts.findIndex( p => p.postId == postId && p.userId == userId);

        if(postIndex ==-1){
            return "Post not found";
        }
        else{
            posts.splice(postIndex, 1);
        }

    }


}

let posts = [new PostModel(1, 1, "I am the Best", "http://google.com"),
new PostModel(2, 1, "Who is the best", "http://google.com"),
new PostModel(2, 1, "You are the Best", "http://google.com"),
new PostModel(3, 1, "We are the Best", "http://google.com"),
];
