<p align="center"><img src="https://imgur.com/Sv6j0B6.png" width="100" /></p>

# graphql-yoga

[![CircleCI](https://circleci.com/gh/prisma/graphql-yoga.svg?style=shield)](https://circleci.com/gh/prisma/graphql-yoga) [![npm version](https://badge.fury.io/js/graphql-yoga.svg)](https://badge.fury.io/js/graphql-yoga)

Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience

## Overview

* **Easiest way to run a GraphQL server:** Sensible defaults & includes everything you need with minimal setup.
* **Includes Subscriptions:** Built-in support for GraphQL subscriptions using WebSockets.
* **Compatible:** Works with all GraphQL clients (Apollo, Relay...) and fits seamless in your GraphQL workflow.

`graphql-yoga` is based on the following libraries & tools:

* [`express`](https://github.com/expressjs/express)/[`apollo-server`](https://github.com/apollographql/apollo-server): Performant, extensible web server framework
* [`graphql-subscriptions`](https://github.com/apollographql/graphql-subscriptions)/[`subscriptions-transport-ws`](https://github.com/apollographql/subscriptions-transport-ws): GraphQL subscriptions server
* [`graphql.js`](https://github.com/graphql/graphql-js)/[`graphql-tools`](https://github.com/apollographql/graphql-tools): GraphQL engine & schema helpers
* [`graphql-playground`](https://github.com/graphcool/graphql-playground): Interactive GraphQL IDE

## Features

* GraphQL spec-compliant
* File upload
* GraphQL Subscriptions
* TypeScript typings
* GraphQL Playground
* Extensible via Express middleware
* Schema directives
* Apollo Tracing
* Accepts both `application/json` and `application/graphql` content-types
* Runs everywhere: Can be deployed via `now`, `up`, AWS Lambda, Heroku etc.
* Supports middleware out of the box.