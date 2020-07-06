//loading packages
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

//accessing features 
const app = express();

//creating api 
app.get("/shirt",(request,response)=>{
    response.sendFile(`${__dirname}/hello.html`);
});

app.listen(3000);