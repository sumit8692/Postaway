// like.route.js
import LikeController from './like.controller.js';
import express from 'express';
import jwtAuth from '../../middlewares/jwt.middleware.js';

const likerouter = express.Router();

const likeController = new LikeController();

likerouter.get('/:postId', likeController.get);
likerouter.get('/toggle/:postId', jwtAuth, likeController.toggle);


export default likerouter;
