# Express & 3rd-party API

- Go to https://api.openweathermap.org and create an account
- On the API keys menu, create a new key
- Save the API key in a secure location since you will use it to access the service
- Go to the API section
- Subscribe to the "Current weather and forecast collection"
- Look for the free option and get the API key
- Consult the documentation at: https://openweathermap.org/current

---

- Using the provided _index.html_ page connect it to the back end.
- Build the API call as requested by the documentation.
- Using the https.get method call the service
- Using the _response.on("data", callback)_ method, decode the response and produce a response page that shows the temperature in celsius as well as a description with an image describing such description.
  - The icon can be retrieved from the same website via the "http://openweathermap.org/img/wn/" + index + "@2x.png" reference.
  - The index is burried in the response.
- Make sure that the response has a link back to the home page.

---

- Also make sure that your API can deal with errors coming from the API call.
