class SuperMath {
    constructor() {
        this.obj = obj;
        this.x = +obj.x;
        this.y = +obj.y;
        this.znak = obj.znak;
    }

    check(obj) {
        const doCalc = prompt('Would you like to perform the operation? (yes/no)');
        const operators = ["+", "-", "/", "*", "%"];

        if (doCalc === 'yes') {
            if (!operators.includes(obj.znak)) {
                alert(`${obj.znak} is not a valid operator.`);
                return p.input();
            } else {
                if (obj.znak === '+') {
                    alert(obj.x + obj.y);
                } else if (obj.znak === '-') {
                    alert(obj.x - obj.y);
                } else if (obj.znak === '/') {
                    alert(obj.x / obj.y);
                } else if (obj.znak === '*') {
                    alert(obj.x * obj.y);
                } else if (obj.znak === '%') {
                    alert(obj.x % obj.y);
                }
            }
        } else if (doCalc === 'no') {
            return p.input();
        } else {
            alert('You have given an invalid answer.');
        }
    }

    input() {
        this.x = prompt('Enter a value for x');
        this.y = prompt('Enter a value for y');
        this.znak = prompt('Enter a value for znak');
        this.obj = {
            "x": +this.x,
            "y": +this.y,
            "znak": this.znak

        }
        return p.check(this.obj);
    }
}

const obj = {
    "x": 12,
    "y": 3,
    "znak": "/"
}

p = new SuperMath(obj);
p.check(obj);