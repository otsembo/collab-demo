const assert = require('assert')
const { add, divide } = require('../index.js')

describe('Math tests', () => {
    it('Addition', () => {
        assert.equal(add(1,2), 3);
    })
    it('Divide', () => {
        assert.equal(divide(2,1), 2);
    })
})
