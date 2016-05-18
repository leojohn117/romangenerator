/*
 * Convert an integer to a Roman number
 */

'use strict';

var assert = require('assert');
var romanGenerator = require('./');

describe('romanGenerator', function() {
  it('should convert integers to roman number', function() {
    assert.equal(romanGenerator(1), 'I');
    assert.equal(romanGenerator(5), 'V');
    assert.equal(romanGenerator(10), 'X');
    assert.equal(romanGenerator(50), 'L');
    assert.equal(romanGenerator(100), 'C');
    assert.equal(romanGenerator(500), 'D');
    assert.equal(romanGenerator(1000), 'M');
    
	assert.equal(romanGenerator(64), 'LXIV');
	assert.equal(romanGenerator(226), 'CCXXVI');
	assert.equal(romanGenerator(900), 'CM');
	assert.equal(romanGenerator(998), 'CMXCVIII');
	assert.equal(romanGenerator(1712), 'MDCCXII');
  });
});