const ShoppingBasket = require('./shoppingBasket');

// total price
describe('getTotalPrice', () => {
    it('returns 0 when no candies in basket', () => {
        expect(new ShoppingBasket().getTotalPrice()).toEqual(0)
    })
})

//add item
describe('addItem', () => {
    it('after adding candy object it is in ShoppingBasket.candies', () => {
        const candy = {name: "Mars", price: 10};
        const basket = new ShoppingBasket();
        basket.addItem(candy);
        expect(basket.candies).toEqual([candy]);
    })
})