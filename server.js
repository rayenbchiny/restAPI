const express=require("express");
const app=express();
const port=3000;
const connectDb=require("./config/connectDb");

require("dotenv").config();
connectDb();
app.use(express.json())
app.use("/api/user",require("./routes/userroute"))












app.listen(port,(err)=>{
    err?console.log(err):console.log("server jawou behi")
})