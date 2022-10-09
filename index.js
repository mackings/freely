const express = require ("express");
const app = express();
const {v4: uuid } = require("uuid");
const fs = require("fs/promises");
require ("dotenv").config;

const bodyParser = require("body-parser");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const posts = [];


app.get("/",function(req,res){
    res.send("Server running");
});

app.post("/addpost", async function(req,res){
    res.send(req.body);
    console.log(req.body);

    await posts.push(req.body)
    res.json("Sent Successfully");
    res.sendStatus(200).statusMessage("Post Uploaded");

});


app.get("/allpost", async function(req,res){
    res.send(posts.body);
});







const port = process.env.PORT || 5000
app.listen(port); 


