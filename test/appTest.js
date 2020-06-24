const assert = require('assert');

// const { expect } = require('chai');
// // const assert = require('chai').assert;

const sumArray = require('../sumTowArrays').sumArray;
const mySubstring = require('../sumTowArrays').mySubstring;

describe('sum arrays', function () {
  it('the function sum two arrays', function () {
    assert.deepEqual(sumArray([1, 2, 3, 4], [1, 2, 3, 4]),( [2, 4, 6, 8]));

  });
  it('the function sum two arrays', function () {
    assert.deepEqual(sumArray([1, 2, 3, 4], [1, 2, 3,4, 5]), [2, 4, 6, 8,5]);

  });

  it('the function sum two arrays', function () {
    assert.deepEqual(sumArray([1, 2, 3, 4], []), [1, 2, 3, 4]);

  });

  it('the function sum two arrays', function () {
    let a = [1, 2, 3, 4];
    let b = [];
    b[1] = 2;
    assert.deepEqual(sumArray(a, b), [1, 4, 3, 4]);

  });
});

describe('substring the string ', function () {
  it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome', 3, 6), 's i');
  });

  it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome', 6), 's awesome');
  });

  it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome', 'a', 'b'), '');
  });

  it('this function substring the given string', function () {
    assert.equal(mySubstring('1234', 0, 'b'), '');
  });

  it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome', -3, -6), '');
  });
  it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome', 0, 20), '');
  });
  
   it('this function substring the given string', function () {
    assert.equal(mySubstring('This is awesome',-2,6 ), '');
  });
});
