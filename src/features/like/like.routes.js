// like.route.js
import LikeController from './like.controller.js';
import express from 'express';

const likerouter = express.Router();

const likeController = new LikeController();

likerouter.get('/:postId', likeController.get);
likerouter.get('/toggle/:postId', likeController.toggle);


export default likerouter;
