const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use((error, req, res, next) => {
    if (error.status === 400) {
        res.render('index', { nombres, tareas, mensajeError: error.mensaje });
    }else{
        res.status(500).send('500');
    };
});

var nombres = [];
var tareas = [];
app.route('/')
    .get((req,res)=>{
        res.render('index', {nombres, tareas});
    });

app.get('/greet', (req, res, next) => {
    const nombre = req.query.name;
    if (nombre) {
        nombres.push(nombre);
        res.redirect("/");
    }else{
        const error = new Error('400');
        error.status = 400; 
        return next(error);
    };
});

app.put('/greet/:nombre', (req, res) => {
    const nombre = req.params.name;
    nombres.push(nombre);
    res.json({nombres});
});

app.get('/saludo', (req,res)=>{
    var valor = req.query.valor;
    res.render('wazzup', {"valor": valor});
});

app.route("/tarea")
    .post((req, res)=>{
        var tarea = req.body.tarea;
        tareas.push(tarea);
        res.redirect("/");
    })
    .get((req, res) => {
        res.json(tareas); 
    });

app.get('/borrar', (req, res)=>{
    var borrar = req.query.i;
    delete tareas[borrar];
    res.redirect("/");
  });

app.get('/bajar', (req, res)=>{
    var indice = parseInt(req.query.i);
    if(indice < tareas.length-1){
        copia = tareas[indice+1];
        tareas[indice+1] = tareas[indice];
        tareas[indice] = copia;
    }

    res.redirect("/");
});

app.get('/subir', (req, res)=>{
    var indice = parseInt(req.query.i);
    if(indice > 0){
        menos = indice-1;
        copia = tareas[menos];
        tareas[menos] = tareas[indice];
        tareas[indice] = copia;
    };
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("Application listening port 3000");
  });