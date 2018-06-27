import * as isPlainObject from 'is-plain-object';
import { ApolloLink } from 'apollo-link';
import { Transformers, TransformerMap } from './defs';

export function parseObject(transformers: Transformers, object) {
  if (!object) {
    return;
  }

  if (Array.isArray(object)) {
    return object.forEach(i => parseObject(transformers, i));
  }

  if (!isPlainObject(object)) {
    return;
  }

  for (let key in object) {
    parseObject(transformers, object[key]);
  }

  const typename = object.__typename;

  if (typename && transformers[typename]) {
    parseObjectValues(transformers[typename], object);
  }
}

export function parseObjectValues(map: TransformerMap, object) {
  for (let key in map) {
    if (object[key]) {
      object[key] = map[key].parseValue(object[key]);
    }
  }
}

export function createTransformerLink(transformers: Transformers) {
  return new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      if (response.data) {
        parseObject(transformers, response.data);
      }

      return response;
    });
  });
}
