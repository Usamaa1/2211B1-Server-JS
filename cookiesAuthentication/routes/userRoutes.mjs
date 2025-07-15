import express from 'express';
import { userLogin, userLogout, userRegister } from '../controller/userController.mjs';
const userRouter = express.Router();



userRouter.post('/register',userRegister)
userRouter.post('/login',userLogin)
userRouter.get('/logout',userLogout)



export default userRouter