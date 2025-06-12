import express from 'express'
import { createPost,deletePost,findPost, updatePost,searchPost } from '../controller/posts.mjs';

const postRoutes = express.Router();


postRoutes.post('/post',createPost)
postRoutes.get('/post',findPost)
postRoutes.get('/searchPost',searchPost)
postRoutes.delete('/post/:id',deletePost)
postRoutes.put('/post/:id',updatePost)

export default postRoutes;

