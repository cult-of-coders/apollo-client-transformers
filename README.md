# Apollo Client Transformers

[![Build Status](https://travis-ci.org/cult-of-coders/apollo-client-transformers.svg?branch=master)](https://travis-ci.org/cult-of-coders/apollo-client-transformers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

You have scalars, but you receive them serialized on the client and you don't really want to do the deserialisation in your React components.

```js
import { createTransformerLink } from 'apollo-client-transformers';

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
