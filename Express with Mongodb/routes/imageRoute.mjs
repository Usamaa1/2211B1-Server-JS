import express from 'express'
import { parser } from '../cloudinaryConfig.mjs';

const imageRoutes = express.Router();



imageRoutes.post('/imageUpload',parser.single('image'),(req,res)=>{
    res.send({message:'Image Uploaded successfully',imagePath: req.file.path});
})


export default imageRoutes;

