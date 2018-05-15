var {expect} = require('chai');
var generateMessage = require('./message');

describe('generateMessage', function() {
    it('should generate correct message objects', function () {
        var from = 'Martin';
        var text = 'Test message';
        var res = generateMessage.generateMessage(from, text);
        expect(res).to.have.property('from');
        expect(res).to.have.property('text');
        // expect(res.from).to.equal(from);
        // expect(res.text).to.equal(text);
        expect(res.createdAt).to.be.a('number');
    });
});