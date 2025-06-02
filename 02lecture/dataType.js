// data type are classifyed based on their, how to access data and store into the database.
// 1. primitive  call by value
//  2. Non-Primitive   call by refernce.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')   // it can be used to store any special number, which are uqiencly identfyed by them.
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
type of return of the data type
undefined = undefined
null = object
boolean = boolean
number = number
string = string
object = object

*/


// ****************************
/*
Their are two type of the memory 
1. Stack(Primitive) and heap(Non-Primitive) memory
 
stack are proving the copy and then store it and access them proprly or eventhly.


heap memory are those memory which can be data can be access doreclty. 
*/

// stack 
let myYouTubeName = "factFusion"

let anotherName = myYouTubeName
anotherName = "sonugupt001"

console.log(anotherName)
console.log(myYouTubeName)

let userOne  = {
        name : "sonu",
        email : "sonu@gmail.com",
        age :24,
}

let userTwo = userOne
userTwo.email = "monu@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)