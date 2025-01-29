import express, { Application } from "express";
const app : Application = express();

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(8000,()=>{
    console.log("Server ok ok")
})