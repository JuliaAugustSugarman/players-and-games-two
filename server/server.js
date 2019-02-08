const express = require('express');
const bodyParser = require('body-parser');//whatever it exports is what we require or import
const app = express();
const PORT = 5000;
const playersRoster = require('./modules/players-roster.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })); // creates req.body

app.get('/players', (req, res) => { 
    res.send(playersRoster);
});


app.post('/new', (req, res) => {
    req.body;
    playersRoster.push(req.body); // you need body parser for req.body to work or you get Null
    res.sendStatus(201);  

})  

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});