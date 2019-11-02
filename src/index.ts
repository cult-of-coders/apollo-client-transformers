import { ApolloLink, FetchResult, Observable } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { DocumentNode } from 'graphql';
import isPlainObject from 'is-plain-object';

import { TransformerMap, Transformers } from './defs';

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

export function isSubscription(query: DocumentNode) {
  const definition = getMainDefinition(query);

  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
}

function parseResponse(response: FetchResult, transformers: Transformers) {
  if (response.data) {
    parseObject(transformers, response.data);
  }

  return response;
}

export function createTransformerLink(transformers: Transformers) {
  return new ApolloLink((operation, forward) => {
    if (isSubscription(operation.query)) {
      return new Observable<FetchResult>(observer =>
        forward(operation).subscribe(response =>
          observer.next(parseResponse(response, transformers)),
        ),
      );
    }

    return forward(operation).map(response =>
      parseResponse(response, transformers),
    );
  });
}
