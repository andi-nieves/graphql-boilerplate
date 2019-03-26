'use strict';

module.exports = {
  resolvers: require('./resolvers'),
  typeDefs: require('../../../utils/gql-loader')('entities/test/test.graphql')
};
