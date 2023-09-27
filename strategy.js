class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

// strategies Bus/Taxi/Car
class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10
    }
}

class Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 5
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 3
    }
}

//
class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

// console.log(commute.travel(new Taxi()))
// console.log(commute.travel(new Bus()))
// console.log(commute.travel(new Car()))

//

class ProductCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function baseStrategy(amount) {
    return amount
}

function vipStrategy(amount) {
    return amount * 0.55
}

function goldStrategy(amount) {
    return amount * 0.85
}


const baseCustomer = new ProductCart(baseStrategy)
const vipCustomer = new ProductCart(vipStrategy)
const goldCustomer = new ProductCart(goldStrategy)


baseCustomer.setAmount(25000)
console.log(baseCustomer.checkout())


vipCustomer.setAmount(25000)
console.log(vipCustomer.checkout())


goldCustomer.setAmount(25000)
console.log(goldCustomer.checkout())
