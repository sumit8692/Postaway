import { ApplicationError } from "../../error-handler/applicationError.js";

class PostModel {
    constructor(id, userId, caption, imageUrl) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.comments = [];
    }

    static getAll(offset = 0, pageSize = 10) {
        return posts.slice(offset, offset + pageSize);
    }

    static add(post) {
        post.id = posts.length + 1;
        posts.push(post);
        return post;
    }

    static get(id) {
        return posts.find((p) => p.id == id);
    }

    static usersPost(userId) {
        return posts.filter((p) => p.userId == userId);
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

    static deletePost(postId, userId) {
        const postIndex = posts.findIndex(p => p.postId == postId && p.userId == userId);
    
        if (postIndex === -1) {
            throw new ApplicationError("Post not found", 404);
           
        } else {
            posts.splice(postIndex, 1);
        }
    }
}

const posts = [
    new PostModel(1, 1, "One", "https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-near-a-road-vdtD3soVFg8"),
    new PostModel(2, 2, "Two", "https://unsplash.com/photos/woman-in-blue-t-shirt-and-blue-denim-shorts-standing-on-road-during-sunset-N7It-3p13iU"),
    new PostModel(3, 3, "Three", "https://images.unsplash.com/photo-1616715278869-162f5fa9136d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(4, 1, "Four", "https://images.unsplash.com/photo-1610972221114-c48c6bb5d2eb?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(5, 2, "Five", "https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?q=80&w=2863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(6, 2, "Six", "https://images.unsplash.com/photo-1526675849333-144a81e4670d?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(7, 2, "Seven", "https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(8, 3, "Eight", "https://images.unsplash.com/photo-1616715340044-27e7e2b05618?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(9, 4, "Nine", "https://images.unsplash.com/photo-1455158967412-bad272ceee73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new PostModel(10, 5, "Ten", "https://images.unsplash.com/photo-1569622332090-9ed0fcc3bf35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
];

export default PostModel;
