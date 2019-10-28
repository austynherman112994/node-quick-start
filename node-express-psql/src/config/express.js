const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

var handlers = require('./expressHandlers')
var routes = require('../routes/routes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Add routes to the express app
app.use(routes);

// Define error handlers
handlers(app)

// Export the fully configured express app.
module.exports = app;
