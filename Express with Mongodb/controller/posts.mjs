import { ObjectId } from "mongodb";
import {database} from "../connection/connection.mjs";


export const createPost = async (req,res)=>{


    try {
        const {postTitle, postDescription,likes} = req.body;

        console.log(postTitle, postDescription, likes);

        //  await client.db('2211B1DB').collection('Post').insertOne({postTitle:postTitle, postDescription:postDescription, likes:likes});
         await database.collection('Post').insertOne({postTitle, postDescription, likes});
    
        res.status(200).send({message: "Post inserted successfully!"})
    
    } catch (error) {
        res.status(500).send({message: error})
    }

}


export const findPost = async (req,res)=>{

    try {
        
        const allPost = await database.collection('Post').find({}).toArray();

        console.log(allPost)

        res.send(allPost)

    } catch (error) {
        res.send({message: error})
    }

}


export const deletePost = async (req,res)=>{
    try {
        
      let {id} = req.params

        const result = await database.collection('Post').deleteOne({_id: new ObjectId(id)});

        res.send({message: result})

    } catch (error) {
        res.send({error: error})
    }
}




export const updatePost = async (req,res)=>{
    try {
        
        let {id} = req.params;
        const {postTitle, postDescription,likes} = req.body;


        console.log(postTitle, postDescription, likes);
        const result = await database.collection('Post').updateOne({_id: new ObjectId(id)},{$set:{postTitle, postDescription, likes}});

        res.send({message: result});

    } catch (error) {
        res.send({message: error})
    }
}

export const searchPost = async (req,res)=>{

    try {
        

        let {searchText} = req.body;


        const allPost = await database.collection('Post').find({postTitle: {$regex: searchText}}).toArray();

        console.log(allPost)

        res.send(allPost)

    } catch (error) {
        res.send({message: error})
    }

}