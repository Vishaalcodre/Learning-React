"use strict";
console.log("Hello!");
var Trainer = /** @class */ (function () {
    function Trainer(Fname, Age) {
        this.fname = Fname;
        this.age = Age;
    }
    Object.defineProperty(Trainer.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trainer.prototype, "firstName", {
        get: function () {
            return this.fname;
        },
        set: function (value) {
            this.fname = this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    return Trainer;
}());
var myTrainer = new Trainer("Vishal", 22);
myTrainer.firstName = "Vishal";
console.log(myTrainer.firstName);
