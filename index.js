const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const Server = express();
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));
const userRoutes = require("./routes/user.routes");

// console.log("works3")

// incoming requets
Server.use(userRoutes)
// Server.get("/",(req,res,next)=>{
//     // database, email, database vaialb,// next(Error())
//     res.send("I am on port 5000")
// })

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongoDB");
    Server.listen(5000)
})
.catch(err=>{
    console.error(err)
})



// # github, master->push
// pm2