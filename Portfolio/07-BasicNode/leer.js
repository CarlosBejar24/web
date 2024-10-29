const fs = require("fs"); 

fs.readFile("data/input.txt","utf-8", (err,datos)=>{
	console.log(datos);
});