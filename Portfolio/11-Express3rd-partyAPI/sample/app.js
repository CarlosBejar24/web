require('dotenv').config(); // Cargar variables del archivo .env

const express = require('express');
const https = require('https');
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY; // Clave de API desde el archivo .env
console.log(apiKey);

// Configuración para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true }));

// Configuración para servir archivos estáticos
app.use(express.static("sample"));

// Ruta principal para mostrar el formulario
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sample/index.html");
});

// Ruta para manejar la solicitud del formulario
app.post("/", (req, res) => {
    const city = req.body.cityName; // Ciudad ingresada en el formulario
    const units = "metric"; // Para obtener la temperatura en Celsius
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    // Hacemos la solicitud a la API
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.on("data", (data) => {
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const description = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                // Construimos la respuesta HTML para el usuario
                res.write(`<h1>The temperature in ${city} is ${temp}°C</h1>`);
                res.write(`<p>The weather is currently ${description}</p>`);
                res.write(`<img src="${imageURL}" alt="weather icon">`);
                res.write('<br><a href="/">Go back</a>');
                res.send();
            });
        } else {
            res.write(`<p>Error: Unable to find weather for ${city}</p>`);
            res.write('<br><a href="/">Go back</a>');
            res.send();
        }
    }).on("error", (e) => {
        res.send("Error connecting to the API: " + e.message);
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
