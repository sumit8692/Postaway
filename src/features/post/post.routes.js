import {upload} from "../../middlewares/fileupload.middleware.js";
import express from 'express';
import PostController from './post.controller.js';


const router = express.Router();
const postController = new PostController();

router.get('/', postController.getAllPosts);
router.post('/', upload.single('imageUrl'), postController.addPost);

export default router;
