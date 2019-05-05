const app = require('express')();
const morgan = require('morgan');

//Variables
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'))

//Server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})