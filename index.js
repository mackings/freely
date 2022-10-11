const express = require ("express");
const app = express();
const {v4: uuid } = require("uuid");
const path = require("path");
require ("dotenv").config;
const Mongoclient = require("mongodb").MongoClient

const bodyParser = require("body-parser");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const posts = [];
const dburl = process.env.DBURL



app.get("/",function(req,res){
    res.send("Server Build successful");
});


app.post("/addpost", async function(req,res){
    res.send(req.body);
    await posts.push(req.body)
    res.send("Post Updated");

});


app.get("/allpost", async function(req,res){
    res.send(posts.body);
});







const port = process.env.PORT || 5000
app.listen(port); 


