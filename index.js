console.log("Journey Begins")
// using express to send response and creating a server
require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.port;

//Sending Response on Home route
app.get("/",(req,res)=>{
  res.send("Hello world")
})

//Send Different Respone on Different route
app.get("/instagram",(req,res)=>{
  res.send("Iam instagram")
})

//Sending Html in a page through a response
app.get("/login",(req,res)=>{
  res.send("<h1>Welcome to the Login Page</h1>")
}) 

app.listen(port,()=>{
  console.log("Server is Running Successfully on Port 3000")
})