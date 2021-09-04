const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


/*
* RUTAS
*/
const users = require('./routes/usersRoutes');

const port = process.env.PORT || 3000;




app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/*
* LLAMANDO A LA RUTAS
*/
users(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("Escuchando el puerto: 3000 http://localhost:"+port);
});

app.get('/hola', (req, res)=>{
    res.send('kisama')
})


// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}

// 200 - ES UN RESPUESTA EXITOSA
// 404 - SIGNIFICA QUE LA URL NO EXISTE
// 500 - ERROR INTERNO DEL SERVIDOR