var express = require('express');
var sessions = require('express-sessions');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var bandCtrl = require('./controllers/bandCtrl');
var mongoUri = 'mongodb://localhost:27017/band';

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/instruments', bandCtrl.addInstrument);
// app.post('/instruments/clarinet')
// app.post('/instruments/trumpet')
// app.post('/instruments/flute')
// app.post('/instruments/saxophone')

app.get('/instruments', bandCtrl.getInstrument);
// app.get('/instruments/clarinet')
// app.get('/instruments/trumpet')
// app.get('/instruments/flute')
// app.get('/instruments/saxophone')

app.delete('/instruments', bandCtrl.removeInstrument);





app.listen(port, function(){
    console.log('listening to port ', port)
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MongoD at ' + mongoUri);
})
