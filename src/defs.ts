export type Transformer = {
  parseValue: (value: any) => any;
  serialize: (value: any) => any;
};

export type TransformerMap = {
  [index: string]: Transformer;
};

export type Transformers = {
  [typename: string]: TransformerMap;
};
