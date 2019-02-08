const express = require('express');

const app = express();
const PORT = 5000;
const playersRoster = require('./modules/players-roster.js')

app.use(express.static('server/public'));

app.get('/players', (req, res) => { 
    res.send(playersRoster);
});

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});