const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const colors = require('colors');

const app = express();

//Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo', {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('DB connected'.zebra))
    .catch(err => console.log(err));

//imports routes
const indexRoutes = require('./routes/index');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //declarando la ruta de las vistas
app.set('view engine', 'ejs'); //declarando el uso de las plantillas ejs

//Middlewares - funciones que se ejecutan antes de que lleguen a las rutas
/**
 * morgan: muestra el estado de respuesta de el servidor a las peticiones
 * ejemplo: GET / 404 21.972 ms - 139 */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //Datos que soporta la respuesta


//Routes
app.use('/', indexRoutes);

//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor creado en el puerto ${app.get('port')}`.random);
});