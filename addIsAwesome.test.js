#!/usr/bin/env node
const { addIsAwesome } = require('./addIsAwesome');

describe('addIsAwesome', () => {
  
  test('it adds is awesome', function (done) {
    addIsAwesome('Training', function (actual) {
      expect(actual).toBe('Training is awesome');
      done();
    })
  });
});
