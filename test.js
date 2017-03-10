const { describe, it } = require('mocha');
const chai = require('chai');
const should = chai.should();

const { implementMode1, implementMode2 } = require('./renderer');

const mode1MockData = ['ac', 'aaa', 'bbbb'];
const mode2MockData = ['aaa', 'bbbb', 'cx'];

describe('Mode1', function() {
    describe('implementMode1()', function() {
        it('should return sorted words in ascending order - alphabetically - only words beginning with a vowel - discarding duplicates', function() {
            implementMode1(mode1MockData).should.equal['ac', 'aaa'];
        });
    });
});

describe('Mode2', function() {
    describe('implementMode2()', function() {
        it('should return stotal number of lines* power of the word\'s length', function() {
            implementMode2(mode2MockData).should.equal['aaa - 27', 'bbbb - 81', 'cx - 27'];
        });
    });
});

