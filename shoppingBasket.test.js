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
        const candy = "Mars";
        const basket = new ShoppingBasket();
        basket.addItem(candy);
        expect(basket.getItems()).toEqual([candy]);
    })
})

describe('getTotalCalories', () => {
    it('shopping basket can calculate total calories across items', () => {
        const candy = {name: "Mars", calories: 100};
        const apple = {name: "Pink Lady", calories: 50};
        const basket = new ShoppingBasket();
        basket.addItem(candy);
        basket.addItem(apple);
        expect(basket.getTotalCalories()).toEqual(150);
        basket.addItem(apple);
        expect(basket.getTotalCalories()).toEqual(200);

    })
})