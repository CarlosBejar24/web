const express = require("express");
const app = express();
const https = require("https");

//Handle forms
const FormData = require("form-data");
//Let the root path return the _index.html_ file
const path = require('path');


// TODO: configure the express server
    //carpeta publica
    app.use(express.static("public"));
    //Ejs templates
    app.engine("ejs", require("ejs").renderFile);
    app.set("view engine", "ejs");
    //Handle input/output JSON
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));


const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => {
  res.render("test");
});

// Endpoint para la versión insegura (GET)
app.get('/login', (req, res) => {
  const userName = req.query.name;
  var params = {
    userName,
    method: "GET",
  };
  res.render("test", params);
});

// Endpoint para la versión segura (POST)
app.post('/login', (req, res) => {
    const userName = req.body.name;
    var params = {
      userName,
      method: "POST",
    };
    res.render("hi", params);
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
