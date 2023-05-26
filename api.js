// Asignación de framework express
const secret = require('./secret'); // import password
const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const user = require('./user.controller'); // import user.controller.js
const app = express(); // ejecutar express
const port = 3000; // puerto de escucha



app.use(express.json()); // para que express pueda interpretar json
mongoose.connect('mongodb+srv://'+secret.mongoUser+':'+secret.mongoPass+'@cluster0.l4iqntb.mongodb.net/?retryWrites=true&w=majority');

app.get('/', user.list);            // GET /
app.post('/', user.create);         // POST /
app.put('/:id', user.update);       // PUT /:id
app.patch('/:id', user.update);     // PATCH /:id
app.delete('/:id', user.destroy);   // DELETE /:id
app.get('/:id', user.get);          // GET /:id

app.use(express.static('app'));

app.get('/', (req, res) => {
console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

// Definir ruta por defecto
app.get('*', (req, res) => {
    res.status(404).send('Ruta no encontrada por GET');
}); 

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
