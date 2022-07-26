#!/usr/bin/env node
import { helloWorld } from './helloWorld';

describe('helloWorld', () => {
  test('to return Hello, world!', () => {
    expect(helloWorld()).toBe('Hello, world!');
  })
});
