import swagger from 'swagger-ui-express';
import fs from 'fs';
const apiDocs = JSON.parse(fs.readFileSync(new URL('./swagger.json', import.meta.url), 'utf-8'));

import express from 'express';
import bodyParser from 'body-parser';
import PostRouter from './src/features/post/post.routes.js';
import userRouter from './src/features/user/user.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import commentrouter from './src/features/comment/comment.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';


const server = express();

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(bodyParser.json());

server.use(loggerMiddleware);

server.use("/api/posts", jwtAuth, PostRouter);
server.use("/api/users", userRouter);
server.use("/like", likeRouter);
server.use("/comment", commentrouter);

// Error handler middleware at the end of the stack
server.use((err, req, res, next) => {
    console.error(err);
    if (err instanceof ApplicationError) {
        return res.status(err.code).send(err.message);
    }
    return res.status(500).send("Something went wrong. Please try later.");
});

server.use((req, res) => {
    res.status(404).send("API not found. Please check our Documentation for more inforamation at localhost:3000/api-docs");
});

server.listen(3000, () => {
    console.log("Server is running at 3000");
});
