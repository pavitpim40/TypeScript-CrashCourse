var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ## BASIC TYPE
var id = 4;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
x = 5;
var age;
var ids = [1, 2, 3, 4, 5];
ids.push(5);
var arr = [1, true, 'hello'];
// ## TUPLE (order is matter)
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, "Brad"],
    [1, "Mean"],
    [5, "Pavit"],
];
// ## UNION
var pid = 22;
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
var user = {
    id: 1,
    name: 'John'
};
// ## TYPE ASSERTION
var cid = 1;
var customer = cid;
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
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
var Person = /** @class */ (function () {
    //private id:number //Private
    //public name:string // Public property , can omit keyword
    //protected lastname:string // Protected, can use with extended
    function Person(id, name, lastname) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var brad = new Person(1, 'Brad', 'Traversy');
console.log(brad.id);
console.log(brad.register());
// ExtendedClass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, lastname, position) {
        var _this = _super.call(this, id, name, lastname) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Shawn", "Mendez", "Developer");
console.log(emp.register());
