import { postModel } from "../models/postModel.mjs"

export const createPost = async (req, res) => {

    try {

        const post = await postModel.create(req.body)
        console.log(post);
        res.send({ message: post });
    } catch (error) {
        console.log(error)
        res.send({ errorMessage: error.message })
    }



}


export const viewPosts = async (req, res) => {

    try {
        const posts = await postModel.find();
        console.log(posts)
        res.send(posts);
    } catch (error) {
        console.log(error)
        res.send({ errorMessage: error });
    }

}


export const deletePost = async (req, res) => {

    try {
      const postDelete = await  postModel.findByIdAndDelete(req.params.id)
      res.send({message: "Item deleted successfully"})
    } catch (error) {
        console.log(error)
        res.send({errorMessage: error})
    }



}




export const updatePost = async (req, res) => {
    try {
        const postUpdate = await  postModel.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.send({message: "Item deleted successfully"})
      } catch (error) {
          console.log(error)
          res.send({errorMessage: error})
      }
  
}
