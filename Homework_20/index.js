let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log(this.step);
    }
};

ladder.up().up().down().showStep();  // 1
// ladder.up().up().showStep();  // 2