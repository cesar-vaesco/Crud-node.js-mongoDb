const moongose = require('moongose');

//Mongoose usa un objeto Schema para definir una lista de propiedades del documentio,
//cada una con su propio tipo y caracteristicas para forzar la estructura del documento.
const Schema = mongoose.Schema;

//Definición del esquema - asignación de la estructura de la colección mongoDB
//  Despues de especificar un esquema se define un Modelo constructor que
//  se usara para crear instancias de los documentos de MongoDB.
const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});
/** Se pueden agregar más claves adicionales posteriormente */


module.exports = moongose.model('Tasks', TaskSchema);