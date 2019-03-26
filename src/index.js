'use strict';

const ddTrace = require('dd-trace').init();

const {startServer} = require('./start-server');

const PORT = process.env.API_PORT || 4000;

startServer(PORT);
