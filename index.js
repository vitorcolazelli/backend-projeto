const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);