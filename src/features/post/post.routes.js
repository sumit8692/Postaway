import {upload} from "../../middlewares/fileupload.middleware.js";
import express from 'express';
import PostController from './post.controller.js';


const postrouter = express.Router();
const postController = new PostController();

postrouter.get('/all', postController.getAllPosts);
postrouter.get('/:id', postController.getPostById);
postrouter.get('/', postController.getUsersPost);



postrouter.post('/', upload.single('imageUrl'), postController.addPost);


postrouter.put('/:id', upload.single('imageUrl'), postController.updatePost);


postrouter.delete('/:id', postController.delete)
export default postrouter;
