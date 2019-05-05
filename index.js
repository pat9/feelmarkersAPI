require('dotenv').config();

const app = require('express')();
const morgan = require('morgan');
const database = require('./models/database')

//Variables
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'))
//Routes
app.use('/markers', require('./routes/markers.routes'))
//Server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})