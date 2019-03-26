'use strict';

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV) {
  // if enviroment is defined will search for .env.NODE_ENV
  require('dotenv').config({path: '.env.' + NODE_ENV.toLowerCase()});
} else {
  // Otherwise will load try to load the .env file
  require('dotenv').config();
}
