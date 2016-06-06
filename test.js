'use strict';

import test from 'ava';
import nxHash from '.';

test(t => {
  t.deepEqual(nxHash('foo', 'bar', '/endpoint', new Date('2001-10-01 22:22:22')), {
    authorization: 'foo:906ecb3be19d8bcf303442ff2c1abffc',
    date: '2001-10-01 22:22:22'
  });
});

