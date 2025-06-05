import {database} from "../connection/connection.mjs";


export const createPost = async (req,res)=>{

    const {postTitle, postDescription,likes} = req.body;


    console.log(postTitle, postDescription, likes);


    //  await client.db('2211B1DB').collection('Post').insertOne({postTitle:postTitle, postDescription:postDescription, likes:likes});
     await database.collection('Post').insertOne({postTitle, postDescription, likes});


    res.send({
        postTitle, postDescription, likes
    })


}
