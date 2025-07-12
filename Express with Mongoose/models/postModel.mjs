import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: [true,'Post title is required']
    },
    postDescription: {
        type: String,
        required: [true,'Post Description is required']
    },
    postLikes: {
        type: Number,
        required: [true,'Likes is required']
    }
  });



 export const postModel =  mongoose.model('Post',postSchema)