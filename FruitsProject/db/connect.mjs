// var mongoose= require("mongoose");


// const connectDB= ()=>{
//     console.log("connect db");
//     return mongoose.connect(url,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };

// module.exports =connectDB;



import { MongoClient } from "mongodb";

url="mongodb+srv://Sumitkaktwan:eyfVjrUUiY5FbuAs@atlascluster.eto8bfl.mongodb.net/AtlasCluster?retryWrites=true&w=majority";

const client = new MongoClient(url);

let conn;
try {
  console.log("connect db");
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let connectDB = conn.db("sample_training");

export default connectDB;