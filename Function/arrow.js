// Arrow function
// this keyword refer the current contexs function
const user = {
    username : "sonu",
    price : 99,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// In the node env console.log(this) printing the empty Object
// But when we do same thing into the broswer that time it's show window, because the window are global object into the broswer.
// this keyword are only applicabe into the object. not into the function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const Chai = function(){
//     let username = "sonu"
//     console.log(this.username);
// }

const Chai = () =>{
    let username = "sonu"
    console.log(this);
}

// Chai()

const addTwo = (a,b) => {
    return a +b;
}

const result = addTwo(2,4);
// console.log(result)
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo2 = (num1, num2) => ({username: "hitesh"})


console.log(addTwo2(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()