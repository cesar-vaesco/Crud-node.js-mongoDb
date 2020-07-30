const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //declarando la ruta de las vistas
app.set('view engine', 'ejs'); //declarando el uso de las plantillas ejs

//Middlewares - funciones que se ejecutan antes de que lleguen a las rutas
/**
 * morgan: muestra el estado de respuesta de el servidor a las peticiones
 * ejemplo: GET / 404 21.972 ms - 139 */
app.use(morgan('dev'));

//Routes


//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor creado en el puerto ${app.get('port')}`.random);
});