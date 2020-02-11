const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

 

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json())

app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))