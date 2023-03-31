class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(person) {
        if (person instanceof Person) {
            this.residents.push(person);
        } else {
            console.log(`Invalid type of variable passed: ${person.constructor.name}}`);
        }
    }
}

class House {
    apartments = [];

    constructor(maxApartmentLimit) {
        this.maxApartmentLimit = maxApartmentLimit;
    }

    addApartment(apartment) {
        if (apartment instanceof Apartment) {
            if (this.apartments.length < this.maxApartmentLimit) {
                this.apartments.push(apartment);
            } else {
                console.log(`Apartment limit reached: ${this.maxApartmentLimit}`);
            }
        } else {
            console.log(`Invalid type of variable passed: ${apartment.constructor.name}}`);
        }
    }
}

person1 = new Person('p1', 'g1');
person2 = new Person('p2', 'g2');
person3 = new Person('p3', 'g1');
person4 = new Person('p4', 'g2');
person5 = new Person('p5', 'g1');
person6 = new Person('p6', 'g2');
apartment1 = new Apartment();
apartment2 = new Apartment();
house1 = new House(1);

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment1.addResident(person3);
apartment1.addResident(person4);

apartment2.addResident(person5);
apartment2.addResident(person6);

house1.addApartment(apartment1);
house1.addApartment(apartment2);