//jshint esversion:6

const express=require("express");
const app=express();
app.get("/", function(req, res){
    res.send("<h1> Hello </h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact me at: sumitcskaktwan@gmail.com");
});
app.get("/about", function(req, res){
    res.send("about: My name is sumit. i love computer science. i am a developer.");
});
app.get("/hobbies", function(req, res){
    res.send("hobbies: Travelling, cooking,  playing cricket, playing cards, yoga etc.");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});