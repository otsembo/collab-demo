const assert = require('assert')
require('../index.js')

describe('Math tests', () => {
    it('Addition', () => {
        assert(add(1,2), 3);
    })
})