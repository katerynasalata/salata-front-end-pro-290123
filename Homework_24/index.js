const Hamburger = class {
    constructor(size, stuffing) {
        this.price = size.price + stuffing.price;
        this.calories = size.calories + stuffing.calories;
    }

    static get SIZE_SMALL() {
        return {
        "price": 50,
        "calories": 20
        }
    }

    static get SIZE_LARGE() {
        return {
        "price": 100,
        "calories": 40
        }
    }

    static get STUFFING_CHEESE() {
        return {
        "price": 10,
        "calories": 20
        }
    }

    static get STUFFING_SALAD() {
        return {
        "price": 20,
        "calories": 5
        }
    }

    static get STUFFING_POTATOES() {
        return {
        "price": 15,
        "calories": 10
        }
    }

    static get TOPPING_SAUCE() {
        return {
        "price": 15,
        "calories": 0
        }
    }

    static get TOPPING_MAYO() {
        return {
        "price": 20,
        "calories": 5
        }
    }
    calculate() {
        return this.calories;
    }

    calculatePrice() {
        return this.price;
    }

    addTopping(topping) {
        this.price += topping.price;
        this.calories += topping.calories;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculate());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());