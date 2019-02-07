var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3001;
var app = express();

//configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//------------
//middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
//------------

//creacion del servidor
app.listen(PORT, () => {
  console.log('Servidor corriendo correctamente en puerto: ' + PORT);
});

module.exports = app;
