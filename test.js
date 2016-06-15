'use strict';

import test from 'ava';
import nxHash from '.';

test('it should calculate the correct hash', t => {
  t.deepEqual(nxHash('foo', 'bar', '/endpoint', new Date('2001-10-01 22:22:22 +0800')), {
    authorization: 'foo:906ecb3be19d8bcf303442ff2c1abffc',
    date: '2001-10-01 22:22:22'
  });
});

test('it should write the date header in Shanghai time', t => {
  t.deepEqual(nxHash('foo', 'bar', '/endpoint', new Date('2001-10-01 22:22:22 +0300')), {
    authorization: 'foo:3025c84abc6d2290620957e68df9ea61',
    date: '2001-10-02 03:22:22'
  });
});

