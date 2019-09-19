// CONFIG
const express = require("express");
const app = express();

app.use(express.json());                                                    // replaces url encoded line
app.use(express.static(__dirname + '/public/dist/public'));

// ROUTE
require('./server/routes')(app);

// SERVER LISTEN
app.listen(8000, ()=> console.log('listening on port 8000'));