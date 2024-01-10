import PostModel from "./post.model.js";

export default class PostController {
    getAllPosts(req, res){
        const posts = PostModel.getall();
        res.status(200).send(posts);
    }
    addPost(req, res){
        
        const { userId, caption } = req.body;
        const newpost = { userId, caption, image: req.file.filename};
        const postcreated = PostModel.add(newpost);
        res.status(201).send(postcreated);

    }
}