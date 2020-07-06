// loading express package
const express = require("express");
const { response } = require("express");

//acessing package features
const app = express();

//creating callback function when http request to server is made 
app.get("/",(request,response)=>{
  response.send("Hello from express");
});

//opening port for webserver to listen to http requests
app.listen(3000);