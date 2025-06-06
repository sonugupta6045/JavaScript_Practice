// explain the prototype property in JavaScript
// The prototype property in JavaScript is a fundamental concept that allows objects to inherit properties and methods from other objects. Every function in JavaScript has a prototype property, which is an object itself. When you create an instance of a function (using the `new` keyword), that instance inherits properties and methods from the function's prototype.

// some time function behave like the object like array and String which all are prototype 
// [function,string,array] --->object--->null

function multuply(num){
    return num * 2;
}
multuply.power = 2;
console.log(multuply(5));
console.log(multuply.power);
console.log(multuply.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`The price of :${this.score}`);
    
}

const chai =  new createUser('chai',20)
const tea = createUser('tea',10)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/