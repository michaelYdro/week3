#!/usr/bin/env node
const { costOfLemonade } = require('./costOfLemonade');

describe('costOfLemonade', () => {
  describe('GIVEN a valid input', function () {
    test.each([
      [1, 100],
      [4, 400],
      [5, 475],
      [9, 855],
      [10, 900],
      [100, 9000],
    ])('WHEN numberOfLemonades is %i THEN it returns %i', (numberOfLemonades, expectedCost) => {
    const actual = costOfLemonade(numberOfLemonades);
    expect(actual).toBe(expectedCost);
});
});

describe('GIVEN an invalid input', function () {
  test.each([
    ['1'],
    ['-1'],
    [-1],
    [{}],
    [null],
  ])('WHEN numberOfLemonades is %i THEN it thows an error', (invalidInput) => {
    expect(function () {
      costOfLemonade(invalidInput)
    }).toThrowError();
    });
  });
});
