/*
 * Convert an integer to a Roman number
 */

'use strict';

var assert = require('assert');
var romangenerator = require('./');

describe('romangenerator', function() {
  it('should convert integers to roman number', function() {
    assert.equal(romangenerator(1), 'I');
    assert.equal(romangenerator(5), 'V');
    assert.equal(romangenerator(10), 'X');
    assert.equal(romangenerator(50), 'L');
    assert.equal(romangenerator(100), 'C');
    assert.equal(romangenerator(500), 'D');
    assert.equal(romangenerator(1000), 'M');
    
	assert.equal(romangenerator(64), 'LXIV');
	assert.equal(romangenerator(226), 'CCXXVI');
	assert.equal(romangenerator(900), 'CM');
	assert.equal(romangenerator(998), 'CMXCVIII');
	assert.equal(romangenerator(1712), 'MDCCXII');
  });
});
