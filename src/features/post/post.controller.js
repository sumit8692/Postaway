import PostModel from "./post.model.js";

export default class PostController {
    getAllPosts(req, res) {
        
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 1;

        
        const offset = (page - 1) * pageSize;

        
        const paginatedPosts = PostModel.getAll(offset, pageSize);

       
        res.status(200).send(paginatedPosts);
    }

    getPostById(req, res) {
        const id = req.params.id;
        const post = PostModel.get(id);

        if (!post) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).send(post);
        }
    }

    getUsersPost(req, res) {
        const userId = req.userId;
        
        if (!userId) {
            res.status(404).send("User not found");
        } else {
            const userPosts = PostModel.usersPost(userId);
            res.status(200).send(userPosts);
        }
    }

    addPost(req, res) {
        const { userId, caption } = req.body;
        const newPost = { userId, caption, image: req.file.filename };
        const postCreated = PostModel.add(newPost);
        res.status(201).send(postCreated);
    }

     updatePost(req, res) {
        const postId = req.params.id; // Assuming the post ID is in the URL parameters
        const { userId, caption } = req.body;
    
        // Check if the postId is provided in the request
        if (!postId) {
            res.status(400).send('Post ID is required for updating a post.');
            return;
        }
    
        // Check if the post with the given ID exists
        const existingPost = PostModel.get(postId);
        if (!existingPost) {
            res.status(404).send('Post not found');
            return;
        }
    
        // Update the existing post
        const updatedPost = {
            userId: userId || existingPost.userId,
            caption: caption || existingPost.caption,
            image: req.file ? req.file.filename : existingPost.image, // Assuming you're updating the image if a new file is provided
        };
    
        // Perform the update in the model
        const postUpdated = PostModel.update(postId, updatedPost);
    
        // Check if the update was successful
        if (postUpdated) {
            res.status(200).send(postUpdated);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }

    delete(req, res){
        const userId = req.userId;
        const postId = req.params.postId;
        const checkDel = PostModel.deletePost(postId, userId);
        if(checkDel){
            return res.status(404).send(checkDel);
        }
        else{
            return res.status(200).send("Post has been removed");
        }
    }

}
