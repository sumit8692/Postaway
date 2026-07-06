// comment.route.js
import CommentController from './comment.controller.js';
import express from 'express';
import jwtAuth from '../../middlewares/jwt.middleware.js';

const commentrouter = express.Router();

const commentController = new CommentController();

commentrouter.get('/:postId', commentController.getAllComments);
commentrouter.post('/:postId', jwtAuth, commentController.addComment);
commentrouter.delete('/:commentId', jwtAuth, commentController.delete);
commentrouter.put('/:commentId', jwtAuth, commentController.update);


export default commentrouter;
