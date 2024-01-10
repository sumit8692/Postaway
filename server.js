import express from 'express';
import bodyParser from 'body-parser';
import PostRouter from './src/features/post/post.routes.js';


const server = express();
server.use(bodyParser.json());

server.use("/api/post", PostRouter);

server.get('/', (req, res) => {
    res.send("Welcome to Ecommerce API's");
});

server.listen(3000, () => {
    console.log("Server is running at 3000");
});
