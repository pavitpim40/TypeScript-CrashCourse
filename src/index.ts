// Basic Type
let id: number = 4
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

x = 5;

let age:number;
let ids: number[] = [1,2,3,4,5];
ids.push(5)

let arr: any[] = [1,true,'hello']


// Tuple (order is matter)
let  person:[number,string,boolean] = [1,'Brad',true]
// Tuple Array
let employee: [number,string][]

employee = [
    [1,"Brad"],
    [1,"Mean"],
    [5,"Pavit"],
]

// Union
let pid: string | number = 22;
pid = '22';


// Enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up)

// Object
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


// Type Assertion
let cid:any = 1
let customer = <number>cid;
// let customer = cid as number


// customer = true //error


// FUNCTION

function addNum(x:number,y:number): number{
    return x +y
}

console.log(addNum(1,2));

function log(message:string | number) : void {
    console.log(message)
}

// Interface
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

