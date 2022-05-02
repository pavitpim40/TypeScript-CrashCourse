// ## BASIC TYPE
let id: number = 4
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

x = 5;

let age:number;
let ids: number[] = [1,2,3,4,5];
ids.push(5)

let arr: any[] = [1,true,'hello']


// ## TUPLE (order is matter)
let  person:[number,string,boolean] = [1,'Brad',true]
// Tuple Array
let employee: [number,string][]

employee = [
    [1,"Brad"],
    [1,"Mean"],
    [5,"Pavit"],
]

// ## UNION
let pid: string | number = 22;
pid = '22';


// ## ENUM
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up)

// ## OBJECT
type User = {
    id:number,
    name:string
}
// const user: {
//     id:number,
//     name:string
// } = {
//     id: 1,
//     name: 'John'
// }

const user: User = {
    id: 1,
    name: 'John'
}


// ## TYPE ASSERTION
let cid:any = 1
let customer = <number>cid;
// let customer = cid as number


// customer = true //error


// ## FUNCTION

function addNum(x:number,y:number): number{
    return x +y
}

console.log(addNum(1,2));

function log(message:string | number) : void {
    console.log(message)
}

// ## INTERFACE
interface UserInterface {
    readonly id: number,
    name:string
    age?:number, //optional key
}

const user1: UserInterface ={
    id: 1,
    name: 'John',
}

//user1.id =5 //error

// Interface not work with primitive or Union
// interface type Point = number | string
// const p1:Point = 1

// ## FUNCTION INTERFACE

interface MathFunc {
    (x:number, y:number) : number
}

const add: MathFunc = (a:number,b:number) : number => a + b
const sub: MathFunc = (a:number,b:number) : number => a - b


// ## CLASSES

interface PersonInterface {
    id: number,
    name:string
    lastname:string,
    register():string
}

class Person implements PersonInterface{
    id:number
    name:string
    lastname:string 
    //private id:number //Private
    //public name:string // Public property , can omit keyword
    //protected lastname:string // Protected, can use with extended
    constructor(id:number,name:string,lastname:string) {
        this.id = id
        this.name = name
        this.lastname = lastname
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1,'Brad','Traversy')
console.log(brad.id)
console.log(brad.register())

// ## ExtendedClass, SubClass

class Employee extends Person {
    position:string

    constructor(id:number,name:string,lastname:string,position:string){
        super(id,name,lastname)
        this.position = position
    }
}

const emp = new Employee(3,"Shawn","Mendez","Developer")
console.log(emp.register())

// Generics == Placeholder of the Type
// function getArray(items:any[]) : any[] {
//     return new Array().concat(items)
// }

function getArray<T>(items:T[]) : T[] {
    return new Array().concat(items)
}


let numArray = getArray<number>([1,2,3,4,5,6])
let stringArray = getArray<string>(["brad","John","Joe"])

// numArray.push("hello") // error