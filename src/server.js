const express = require('express');
const bodyparser = require('body-parser');
const server = express();

const personas = [];

server.use(bodyparser.json());

server.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});

server.get('/sumar/:num1/:num2', (req, res) => {
    res.status(200).send((parseInt(req.params.num1)  + parseInt(req.params.num2)).toString());
});

server.get('/dividir/:num1/:num2', (req, res) => {
    if(parseInt(req.params.num1) == 0 || parseInt(req.params.num2) == 0) {
        res.status(400).send('NO se puede dividir entre 0');
    }else {
       res.status(200).send((parseInt(req.params.num1) / parseInt(req.params.num2)).toString());
    }    
});

server.get('/personas', (req, res) => {
    res.send(personas);
});

server.get('/persona/:id', (req, res) => {
    res.send(personas.find(f => f.id = req.params.id));
});

server.post('/persona', (req, res) => {
    const params = req.body;
    personas.push(params);
    res.send('se creo la persona con exito');
});

server.listen(3000, ()=> {
    console.log('Servidor funcionando en el puerto 3000');
});