const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/cottage', require('./routes/cottage'));
app.use('/api/admin', require('./routes/admin'));

module.exports = app;