#!/usr/bin/env node
const { separateOddsAndEvens } = require('./separateOddsAndEvens');

describe('separateOddsAndEvens', () => {
  const testTable = test.each([
    [[1, 2], [[1], [2]]],
    [[10, 20, 30], [[], [10, 20, 30]]],
    [[11, 21, 31], [[11, 21, 31], []]]
  ]);

  testTable('When array is %j THEN is returns %j', function (input, expected) {
    const actual = separateOddsAndEvens(input)
    expect(actual).toEqual(expected)
  });

});
