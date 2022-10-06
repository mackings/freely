const express = require ("express");
const app = express();
const {v4: uuid } = require("uuid");
const fs = require("fs/promises");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.send("Server is up jarey");
});


app.post("/addname",  async function(req,res){
    const id = uuid();
    const names = req.body.name;
    console.log(names);
    console.log(id);
    res.send("success");
    await fs.mkdir()
    
});
app.get("/names/:id",function(req,res){

    res.send(req.body.params);
    

})





app.listen(3000);
