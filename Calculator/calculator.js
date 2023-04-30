//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));


//Calculator
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");  
});

app.post("/", function(req, res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);

  var result=num1+num2;
  res.send("The result of the calculation is "+result);
});

//BMI
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");  
});

app.post("/bmicalculator", function(req, res){
  var w=parseFloat(req.body.w);
  var h=parseFloat(req.body.h);

  var n=w/(h*h);
  res.send("Your BMI is "+n);
});


app.listen(3000,function(){
    console.log("server started on port 3000");
});