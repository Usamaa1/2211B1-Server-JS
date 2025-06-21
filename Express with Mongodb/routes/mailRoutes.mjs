import express from 'express'
import sendMail from '../controller/mailController.mjs';
const mailRoutes = express.Router();


mailRoutes.post('/sendMail',sendMail)

export default mailRoutes;

