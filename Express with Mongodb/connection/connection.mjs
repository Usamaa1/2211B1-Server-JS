
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config'
const uri = "mongodb://localhost:27017";
// const uri = process.env.MONGODB_CONNECTION_STRING;

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) {
    console.log(e)
    // Ensures that the client will close when you finish/error
    await client.close();
    process.exit();
  }
}
run();

process.on('SIGINT',async()=>{
    await client.close();
    process.exit();
})

export const database = client.db('2211B1DB')
export {client};