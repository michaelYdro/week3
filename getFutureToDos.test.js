#!/usr/bin/env node
import { getFutureToDos } from './getFutureToDos';

describe('getFutureToDos', () => {
  // utility function to help create a delay
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  const fakeApi = {
    fetchToDos: async () => {
      await wait(50);
      return [
        {task: 'Make bed', due: new Date(2009, 5, 5) },
        {task: 'Clean room', due: new Date(3000, 5, 5) },
      ]
    }
  }

  test('that we only get clean room', function (done) {
    getFutureToDos(fakeApi).then(function (actual) {
      expect(actual).toEqual([
        { task: 'Clean room', due: new Date(3000, 5, 5) },
      ]);
      done();
    });
  });
});
