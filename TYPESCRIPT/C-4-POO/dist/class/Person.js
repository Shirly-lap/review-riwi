"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    gretting() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
    eat(food) {
        console.log(`${this.firstName} is eating ${food}`);
    }
    brushTeeth() {
        console.log(`${this.firstName} is brushing their teeth`);
    }
}
exports.Person = Person;
