const express = require("express");
const errorhandler = require("./middlewares/errorhandler");
const dotenv = require("dotenv").config();
const {connectmongodb} = require('./connection');

connectmongodb('mongodb://localhost:27017/contacts').then(()=>
  console.log("mongodb connected")
);

const app  = express();

const port= process.env.PORT || 5000;

app.use(express.json());//without this req.body will be undefined
app.use('/api/contacts',require("./routes/contactroutes"))
app.use('/api/users',require("./routes/userroutes"))
app.use(errorhandler);

app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})