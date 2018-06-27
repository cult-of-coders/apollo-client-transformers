export const querySample = {
  variables: {
    params: {
      filters: {},
      options: {
        limit: 5,
        skip: 0,
      },
    },
  },
  extensions: {},
  operationName: 'posts',
  query: {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
          kind: 'Name',
          value: 'posts',
        },
        variableDefinitions: [
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'params',
              },
            },
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'JSON',
                },
              },
            },
          },
        ],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'posts',
              },
              arguments: [
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'params',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'params',
                    },
                  },
                },
              ],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: '_id',
                    },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'title',
                    },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'user',
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'email',
                          },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: '__typename',
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'tags',
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'name',
                          },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: '__typename',
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: '__typename',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
    loc: {
      start: 0,
      end: 195,
      source: {
        body:
          '\n      query posts($params: JSON!) {\n        posts(params: $params) {\n          _id\ntitle\nuser {\n          email\n\n        }\n      \ntags {\n          name\n\n        }\n      \n\n        } \n      }\n    ',
        name: 'GraphQL request',
        locationOffset: {
          line: 1,
          column: 1,
        },
      },
    },
  },
};

export const mutationSample = {
  variables: {
    document: {
      title: 'Z Newly',
      date: '2018-06-27T16:31:45.367Z',
    },
  },
  extensions: {},
  operationName: 'postsInsert',
  query: {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'mutation',
        name: {
          kind: 'Name',
          value: 'postsInsert',
        },
        variableDefinitions: [
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'document',
              },
            },
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'JSON',
              },
            },
          },
        ],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'postsInsert',
              },
              arguments: [
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'document',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'document',
                    },
                  },
                },
              ],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: '_id',
                    },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: '__typename',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
    loc: {
      start: 0,
      end: 126,
      source: {
        body:
          '\n      mutation postsInsert($document: JSON) {\n        postsInsert(document: $document) {\n          _id\n        }\n      }\n    ',
        name: 'GraphQL request',
        locationOffset: {
          line: 1,
          column: 1,
        },
      },
    },
  },
};
