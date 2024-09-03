require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String,
});
userSchema.set("strictQuery", true);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

// TODO: Configure passport to allow google authentication
// - Remember to use create strategy
// - Configure the serialize user method
// - Configure the deserialize user
// - Configure the google strategy
// * Remember to place the client and client secret in env variables

app.get("/", (req, res) => {
  res.render("home");
});

// TODO: implement the "/auth/google" and "/auth/google/secrets"
// paths to do Google based authentication

app.get("/secrets", (req, res) => {
  // TODO: Look for the user in the DB, if found
  // Display the secrets page with the associated secret
  res.render("secrets");
});

app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    // TODO: Get the information from the login form,
    // search for it in the DB, if user/password match,
    // Authenticate the user in the request header, and then
    // send to /secrets, else send error and back to home
    console.log(req.body.username);
    console.log(req.body.password);
    res.redirect("/secrets");
  });

app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post("/register", (req, res) => {
    // TODO: Get the information from the register form and
    // Save the information to the DB. Once saved authenticate
    // in session and send to /secrets, if there is an error
    // on the register process, show error and allow the user to
    // register again.
    console.log(req.body.username);
    console.log(req.body.password);
    res.redirect("/secrets");
  });

app
  .route("/submit")
  .get((req, res) => {
    // TODO: if the user is authenticated, show the submit page,
    // else redirect to login page
    res.render("submit");
  })
  .post((req, res) => {
    console.log(req.body.secret);
    // Once the user is authenticated and their session gets saved,
    // their user details are saved to req.user.
    // console.log(req.user.id);
    // TODO: Retrieve the document representing the current user
    // and save the associated secret with it.
    res.redirect("/secrets");
  });

app.get("/logout", (req, res) => {
  // TODO: Logout the user from the session and send it back
  // to root path.
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
