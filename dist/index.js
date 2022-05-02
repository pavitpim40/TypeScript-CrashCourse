"use strict";
// ## BASIC TYPE
let id = 4;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = 5;
let age;
let ids = [1, 2, 3, 4, 5];
ids.push(5);
let arr = [1, true, 'hello'];
// ## TUPLE (order is matter)
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [1, "Mean"],
    [5, "Pavit"],
];
// ## UNION
let pid = 22;
pid = '22';
// ## ENUM
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
// const user: {
//     id:number,
//     name:string
// } = {
//     id: 1,
//     name: 'John'
// }
const user = {
    id: 1,
    name: 'John'
};
// ## TYPE ASSERTION
let cid = 1;
let customer = cid;
// let customer = cid as number
// customer = true //error
// ## FUNCTION
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
// ## CLASSES
class Person {
    constructor() {
        console.log("123");
    }
}
const brad = new Person();
