import express from 'express'
import { getClass, getSchool } from '../controllers/schoolController.mjs';

const schoolRoutes = express.Router();


schoolRoutes.get('/schools',getSchool)
schoolRoutes.get('/class',getClass)


export default schoolRoutes

