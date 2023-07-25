class ShoppingBasket {
    constructor() {
        this.candies = []
    }

    getTotalPrice() {
        let sum = 0;
        this.candies.forEach(candy => sum += candy.price);
        return sum;
    }

    addItem(candy) {
        this.candies.push(candy);
    }
}

module.exports = ShoppingBasket;