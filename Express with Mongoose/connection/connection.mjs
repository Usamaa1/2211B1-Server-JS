// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import 'dotenv/config'
const uri = "mongodb://localhost:27017/secondDB";
console.log(uri);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri);

    // Send a ping to confirm a successful connection
    
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
export default run;