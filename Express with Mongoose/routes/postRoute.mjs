import express from 'express'
import { createPost,deletePost, updatePost, viewPosts } from '../controller/posts.mjs';

const postRoutes = express.Router();


postRoutes.post('/post',createPost)
postRoutes.get('/post',viewPosts)
postRoutes.delete('/post/:id',deletePost)
postRoutes.put('/post/:id',updatePost)


export default postRoutes;

