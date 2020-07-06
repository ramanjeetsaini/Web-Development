const express = require("express");
const multer = require("multer");
cost multer = require("multer");

const app = express();
const formfn = multer();

const tshirtfn = ()=>{
    app.post("/tshirt", upload.array(), (request, response) => {
        const size = request.body.size;
        const color = request.body.color;
        response.send(`Command received! Size: ${size}, color: ${color}`);
      });
}