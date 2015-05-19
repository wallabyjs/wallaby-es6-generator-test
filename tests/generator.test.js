import dummyFunc from '../src/generator.js';
var expect = require('expect.js');

describe("A irrelevant description", function() {
    it("to hopefully prove how to get node environment tests working with wallaby", function() {
        expect(dummyFunc('echo')).to.be('echo');
    });
});