class ShoppingBasket {
    constructor() {
        this.items = []
        this.totalCalories = 0
    }

    getTotalPrice() {
        let sum = 0;
        this.items.forEach(item => sum += item.price);
        return sum;
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items
    }

    getTotalCalories() {
        this.totalCalories = this._calculateTotalCalories()
        console.log(this.totalCalories[0])
        return this.totalCalories
    }

    _calculateTotalCalories() {
        console.log(this.items)
        return this.items.reduce(this._calorieAdder, 0)
    }

    _calorieAdder(runningTotal, item) {
        console.log({item})
        console.log({runningTotal})
        return item.calories + runningTotal;
    }
}

module.exports = ShoppingBasket;