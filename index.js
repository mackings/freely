const express = require ("express");
const app = express();
const {v4: uuid } = require("uuid");
const path = require("path");
require ("dotenv").config;
const Mongoclient = require("mongodb").MongoClient
const mongoose = require('mongoose');
const dsch = require("./database/db");
const Usermodel = require("./database/db")

const bodyParser = require("body-parser");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mongoose.connect("mongodb+srv://Macs:Macs@cluster0.janfev1.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("Mongoclient")

});


app.get("/",function (req,res){
    res.send("Server Build successful");
});


app.post("/Upload",function (req,res){

    let newpost = Usermodel({
        name: req.body.name,
        email: req.body.email
    });



    newpost.save();
    console.log(req.body);

    res.json({message:"Upload successful"})

    



});


app.post("/addpost", async function(req,res){
    res.send(req.body);
    await posts.push(req.body)
    res.send("Post Updated");
    const add = dsch.add(req.body, function (){
        res.send("Post Added");
        console.log(add);

    })


});


app.get("/allpost", async function(req,res){
    res.send(posts.body);
});







const port = process.env.PORT || 5000
app.listen(port); 


