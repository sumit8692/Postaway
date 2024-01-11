// like.route.js
import CommentController from './comment.controller.js';
import express from 'express';

const commentrouter = express.Router();

const commentController = new CommentController;

commentrouter.get('/:postId', commentController.getAllComments);
commentrouter.post('/:postId', commentController.addComment);
commentrouter.delete('/:commentId', commentController.delete);
commentrouter.put('/:commentId', commentController.update);


export default commentrouter;
