//jshint esversion:6 


const express=require("express");
const bodyParser = require("body-parser");
const request=require("request");
const https=require("https");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html"); 
});

app.post("/", function(req,res){

const firstName=req.body.fName;
const lastName=req.body.lname;
const email=req.body.email;

const data= {
    members:[
        {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
};

const jsonData=JSON.stringify(data);
 
const url="https://us2.api.mailchimp.com/3.0/lists/d2d0623f3b"
 
const options={
    method: "POST",
    auth:"SumitKaktwan:84d774674e46a3f854062ad2ff30b569-us21"

}
const request=https.request(url, options, function(response){

    if(response.statusCode===200){
        res.sendFile(__dirname + "/success.html");
    }else{
        res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
        console.log(JSON.parse(data)); 
    })
})

request.write(jsonData);
request.end();
});

app.get("/", function(req,res){
 res.send("Hello");
});




app.post("/failure", function(req, res){
    res.redirect("/");
});







app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});

//API key
// 84d774674e46a3f854062ad2ff30b569-us21
//list id
//d2d0623f3b