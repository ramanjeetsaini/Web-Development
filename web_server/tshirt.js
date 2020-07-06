//loading packages
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

//accessing features 
const app = express();
const upload = multer();

//creating api 
app.get("/shirt",(request,response)=>{
    response.sendFile(`${__dirname}/tshirt.html`);
});

app.post("/tshirt", upload.array(), (request, response) => {
    const size = request.body.size;
    const color = request.body.color;
    response.send(`Command received! Size: ${size}, color: ${color}`);
  });

app.listen(3000);