import PostModel from "./post.model.js";

export default class PostController {
    getAllPosts(req, res){
        const posts = PostModel.getall();
        res.status(200).send(posts);
    }
    addPost(req, res){
        
        const { userId, caption, } = req.body;
        const newpost = { userId, caption, image: req.file.filename};
        const postcreated = PostModel.add(newpost);
        res.status(201).send(postcreated);

    }

    getPostById(req, res){
        const id = req.params.id;

        const post = PostModel.get(id);

        if(!post){
            res.status(404).send('Post not found');
        }
        else{
            return res.status(200).send(post);
        }
    }

    static getUsersPost(userId){
        const userId = req.query.userId;
        const allposts = PostModel.usersPost(userId);
        if(!userId){
            res.status(404).send("User not Found");
        }
        else{
            return res.status(200).send(allposts);
        }
    }
}