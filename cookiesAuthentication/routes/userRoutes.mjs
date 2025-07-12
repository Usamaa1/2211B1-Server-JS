import express from 'express';
import { userRegister } from '../controller/userController.mjs';
const userRouter = express.Router();



userRouter.post('/register',userRegister)



export default userRouter