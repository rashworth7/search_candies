const searchCandiesFunctions = require('./searchCandies')
const searchCandies = searchCandiesFunctions.searchCandies
const filterByPrice = searchCandiesFunctions.filterByPrice
const filterByString = searchCandiesFunctions.filterByString

describe('searchCandies', () => {
    it('Ma, 10 returns mars, maltesers', () => {
        expect(searchCandies('MA', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
    it('Ma, 2 returns Mars', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    })
    it('S, 10 returns Skittles, Skitties, Starbursts', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    })
    it('S, 4 returns Skitties, Skittles', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles'])
    })
})

describe ('filterByPrice', () => {
    it('return an array of candy objects with a price less than 10', () => {
        expect(filterByPrice([
            { name: 'Aero', price: 1.99 },
            { name: 'Skitties', price: 2.99 },
            { name: 'Mars', price: 1.49 },
            { name: 'Maltesers', price: 3.49 },
            { name: 'Skittles', price: 1.49 },
            { name: 'Starburst', price: 5.99 },
            { name: 'Ricola', price: 1.99 },
            { name: 'Polkagris', price: 5.99 },
            { name: 'Pastila', price: 4.99 },
            { name: 'Mentos', price: 8.99 },
            { name: 'Raffaello', price: 7.99 },
            { name: 'Gummi bears', price: 10.99 },
            { name: 'Fraise Tagada', price: 5.99 }
          ], 10)).toEqual(
            [
                { name: 'Aero', price: 1.99 },
                { name: 'Skitties', price: 2.99 },
                { name: 'Mars', price: 1.49 },
                { name: 'Maltesers', price: 3.49 },
                { name: 'Skittles', price: 1.49 },
                { name: 'Starburst', price: 5.99 },
                { name: 'Ricola', price: 1.99 },
                { name: 'Polkagris', price: 5.99 },
                { name: 'Pastila', price: 4.99 },
                { name: 'Mentos', price: 8.99 },
                { name: 'Raffaello', price: 7.99 },
                { name: 'Fraise Tagada', price: 5.99 }
              ]
          )
    })
})

describe ('filterByString', () => {
    it('return an array of candy objects with starting string Ma', () => {
        expect(filterByString([
            { name: 'Aero', price: 1.99 },
            { name: 'Skitties', price: 2.99 },
            { name: 'Mars', price: 1.49 },
            { name: 'Maltesers', price: 3.49 },
            { name: 'Skittles', price: 1.49 },
            { name: 'Starburst', price: 5.99 },
            { name: 'Ricola', price: 1.99 },
            { name: 'Polkagris', price: 5.99 },
            { name: 'Pastila', price: 4.99 },
            { name: 'Mentos', price: 8.99 },
            { name: 'Raffaello', price: 7.99 },
            { name: 'Gummi bears', price: 10.99 },
            { name: 'Fraise Tagada', price: 5.99 }
          ], 'Ma')).toEqual(
            [
                { name: 'Mars', price: 1.49 },
                { name: 'Maltesers', price: 3.49 }
              ]
          )
    })
})