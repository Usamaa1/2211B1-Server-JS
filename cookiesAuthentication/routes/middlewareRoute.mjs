import express from 'express';
import { authMiddleware } from '../controller/authMiddleware.mjs';
const middlewareRouter = express.Router();



middlewareRouter.get('/middleware',authMiddleware)




export default middlewareRouter