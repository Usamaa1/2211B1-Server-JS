import express from 'express'
import { createPost } from '../controller/posts.mjs';

const postRoutes = express.Router();


postRoutes.post('/post',createPost)

export default postRoutes;

