const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.route('/')
  .get((req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  })
  .post((req, res) => {
        var peso = req.body.weight;
        var altura = req.body.height;
        res.send("Your BMI is " + (peso / (altura * altura) * 10000));
  });

app.listen(3000, ()=>{
  console.log("Application listening port 3000");
});

