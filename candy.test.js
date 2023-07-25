const Candy = require('./candy');

describe('getName', () => {
    it('returns Mars when called', () => {
        expect(new Candy('Mars', 10).getName()).toEqual('Mars')
    })
})

describe('getPrice', () => {
    it('returns 10 when called', () => {
        expect(new Candy('Mars', 10).getPrice()).toEqual(10)
    })
})