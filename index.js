const express = require ("express");
const app = express();
const {v4: uuid } = require("uuid");
const path = require("path");
require ("dotenv").config;
const Mongoclient = require("mongodb").MongoClient
const mongoose = require('mongoose');
const dsch = require("./database/db");
const Umodel = require("./database/db")

const bodyParser = require("body-parser");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const db = mongoose.connect("mongodb+srv://Macs:Macs@cluster0.janfev1.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("Mongoclient")

});


app.get("/",function (req,res){
    res.send("Server Build successful");
});


//post endpoint

app.post("/upload",function (req,res){

    const upload = new Umodel({
        name:req.body.name,
        email:req.body.email

    });

    upload.save();

    

    res.json({message:"Upload Successful"});
    console.log(req.body);

});


const port = process.env.PORT || 5000
app.listen(port); 


