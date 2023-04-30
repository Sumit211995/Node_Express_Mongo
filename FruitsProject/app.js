const express=require("express");
const app=express();
const connectDB= require("./db/connect.mjs");

const getAllProducts= require("./routes/projects");

app.get("/", (req,res)=>{
    res.send("hi, i am live");
});


app.use("/api/products", getAllProducts);

const start = async()=>{
    try{
        await connectDB();
    }catch(error){
        console.log(error);
    }
};

app.listen(3000,()=>{
    console.log(`${3000} listening`);
});


