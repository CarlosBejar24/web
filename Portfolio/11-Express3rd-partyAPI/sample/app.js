const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const axios = require("axios");
const FormData = require("form-data");

const app = express();

// https get
app.get("/", (req, res) => {
  var url = "http://placekitten.com/g/300/300";
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      res.write(data);
      res.send();
    });
  });
});

// https post
app.get("/dictionary", (req, res) => {
  var url = "https://api.toys/api/check_dictionary";
  const form_data = new FormData();
  form_data.append("text", "marry");
  const options = {
    method: "POST",
    headers: form_data.getHeaders(),
  };
  var soapRequest = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      response
        .on("data", (data) => {
          var jsonResp = JSON.parse(data);
          console.log(jsonResp);
          res.send("Success");
        })
        .on("error", (e) => {
          res.send("Error ${e.message}");
        });
    } else {
      res.send("Error");
    }
  });
  form_data.pipe(soapRequest);
});

// axios post
app.get("/temp", (req, res) => {
  var url = "https://api.toys/api/check_dictionary";
  const form_data = new FormData();
  form_data.append("text", "marry");
  axios
    .post(url, form_data, { headers: form_data.getHeaders() })
    .then((response) => {
      var data = response.data;
      console.log(data);
      if (!data.hasOwnProperty("error")) {
        console.log("no error");
        res.send("Success");
      } else {
        console.log("Fail");
        res.send("Fail");
      }
    })
    .catch((err) => {
      console.log(err.code + ": " + err.message);
      console.log(err.stack);
      res.send("Fail error");
    });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
