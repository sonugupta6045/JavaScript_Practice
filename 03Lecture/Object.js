// singleton  when we are creted from the construter are called singleton

// const { use } = require("react");

// Object literals
 
const mysym = Symbol("key1");  // decelaration of the symbol

const User = {
    name:"Sonu",
    "full name" : "Sonu Gupta",
    [mysym] : "mykey1",      // represenation of the symbol key and used it
    age : 23,
    add:{
        dis: "thane",
        landmark:"ganesh",
    },
    email : "sonu@gmail.com",
    isLoggedIn: false,
}

// console.log(User.email)  // this is one way to access the data from the object
// console.log(User["email"]) // this is another way to access the data from the object
// console.log(User["full name"])
// console.log(User[mysym]) // this syntax for access data from the object which are intinilae symbol into the object.


// User.email = "gupta@gmail.com";
// Object.freeze(User);
// User.age = 22;
// console.log(User["email"])
// console.log(User["age"])
// console.log(User);

User.greeting = function(){
    console.log("Hello JS user");
}
User.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // "this keyword used to refer key of the object"
}

console.log(User.greeting());
console.log(User.greetingTwo());




