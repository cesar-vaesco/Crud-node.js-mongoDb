const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //declarando la ruta de las vistas

//Middlewares


//Routes


//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor creado en el puerto ${app.get('port')}`.random);
});