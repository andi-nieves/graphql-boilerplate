"use strict";

const { GraphQLServer } = require("graphql-yoga");

require("./utils/env-loader.js");

const createServer = function() {
  const gqlServerConfig = require("./api");
  return new GraphQLServer(gqlServerConfig);
};

const startServer = async function(port) {
  const server = createServer();
  const app = await server.start({ port });
  console.log(`Server is running on http://localhost:${port}`);
  return app;
};

module.exports = { createServer, startServer };
