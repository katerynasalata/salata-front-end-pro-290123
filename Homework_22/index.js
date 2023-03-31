class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}

class Car {
    owner;
    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
    }

    assignOwner(owner) {
        if (owner instanceof Person) {
            if (owner.age > 18) {
                this.owner = owner;
            } else {
                console.log('You must be over 18 to own a car');
            }
        } else {
            console.log(`Invalid type of variable passed: ${owner.constructor.name}}`);
        }
    }

    describe() {
        console.log(`
        Brand - ${this.brand},
        Model - ${this.model},
        Year of production - ${this.year},
        License plate - ${this.plate}`);

        if (this.owner != undefined) {
            this.owner.describe();
        }
    }
}

person1 = new Person('first person', 25);
person2 = new Person('second person', 14);

car1 = new Car('Lada', 'Niva', 1931, 'AH 5264');
car2 = new Car('Honda', 'Civic', 2005, 'FD 8712');

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.describe();
car2.describe();