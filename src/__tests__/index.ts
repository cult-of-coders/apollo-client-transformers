import { assert } from 'chai';
import { describe, it } from 'mocha';

import { parseObject } from '../index';

const DateScalar = {
  parseValue(time) {
    return new Date(time);
  },

  serialize(time: Date) {
    return time.getTime();
  },
};

describe('It should work', () => {
  it('Should parseValue properly', () => {
    const config = {
      User: {
        createdAt: DateScalar,
      },
    };

    const user = {
      __typename: 'User',
      _id: 'xxx',
      createdAt: new Date().getTime(),
    } as any;

    parseObject(config, user);

    assert.isTrue(user.createdAt instanceof Date);
  });
});
