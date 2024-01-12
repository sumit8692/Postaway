import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type: 'json'};

import express from 'express';
import bodyParser from 'body-parser';
import PostRouter from './src/features/post/post.routes.js';
import userRouter from './src/features/user/user.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import commentrouter from './src/features/comment/comment.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';



const server = express();

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(bodyParser.json());


server.use("/api/posts", jwtAuth, PostRouter);
server.use("/api/users", userRouter);
server.use("/api/likes", jwtAuth, likeRouter);
server.use("/api/comments", jwtAuth, commentrouter)


server.use((req, res) => {
    res.status(404).send("API not found. Please check our Documentation for more inforamation at localhost:3000/api-docs");
})

server.listen(3000, () => {
    console.log("Server is running at 3000");
});
