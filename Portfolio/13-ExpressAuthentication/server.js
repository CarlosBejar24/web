require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

const mongoUrl = "mongodb://127.0.0.1:27017/LOTR";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of a schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});
userSchema.set("strictQuery", true);

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
