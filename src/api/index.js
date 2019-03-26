"use strict";

const merge = require("lodash/merge");
const { mergeStrings } = require("gql-merge");
const GraphQLJSON = require("graphql-type-json");

const test = require("./entities/test");

module.exports = {
  typeDefs: mergeStrings([test.typeDefs]),
  resolvers: test.resolvers
};
