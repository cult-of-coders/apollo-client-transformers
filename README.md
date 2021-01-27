# Apollo Client Transformers

[![Build Status](https://travis-ci.org/cult-of-coders/apollo-client-transformers.svg?branch=master)](https://travis-ci.org/cult-of-coders/apollo-client-transformers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This package is useful for when you have scalars, but you receive them serialized on the client and you don't really want to do the deserialisation in your view layer.

## Install

```
npm i -S apollo-client-transform
```

## Usage

```js
import { createTransformerLink } from 'apollo-client-transform';

const DateTransformer = {
  parseValue(time) {
    return new Date(time);
  },
};

const transformers = {
  User: {
    createdAt: DateTransformer,
  },
};

const transformerLink = createTransformerLink(transformers);

// You can now concatenate it with your http link before creating the client like so:
const enhancedHttpLink = transformerLink.concat(httpLink);
```

## Usage with subscriptions

```js
import { createTransformerLink, isSubscription } from "apollo-client-transform";
import { split } from "apollo-link";

...

const link = split(({ query }) => isSubscription(query), wsLink, httpLink);

const client = new ApolloClient({
  ...
  link: transformerLink.concat(link)
});
```
