const assert = require('assert')
const { add } = require('../index.js')

describe('Math tests', () => {
    it('Addition', () => {
        assert(add(1,2), 3);
    })
})