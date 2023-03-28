let getAdder = function() {
    let result = 0;
    return function(n) {
        result += n;
        console.log(result);
    }
};

let sum = getAdder();

sum(3);
sum(5);
sum(20);

