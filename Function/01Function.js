// Function

// function myName() {
//     console.log("Sonu Gupta");
// }

// myName()


// ***********************

// function addtwoNumber(number1,number2 ) // number1 and number 2 are parameter 

// addtwoNumber(2,4) // here 2,4 are the agrument

// function addtwoNumber(number1, number2) {
//     console.log(number1+number2);
// }

// function addtwoNumber(number1, number2) {
// //    let result = number1 + number2;
// //    return result
// return number1 + number2;
// }
// const result = addtwoNumber(3,4)
// console.log("result :", result);

// *************************************


function loginUserMessage(username = "samay"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("sonu"))

function calcuateCarPrice(val1, val2, ...num) { // ...num can be rest and spreading operater depend upon sistuation.
    return num;
}
// console.log(calcuateCarPrice(200,300,400,5000))
// console.log(calcuateCarPrice(200,300,400,5000))

const User = {
    name : "Sonu",
    price: 99
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price are ${anyObject.price}`)
}

// handleObject(User);
handleObject({
    name : "Samay",
    price : 199,
})

const Array = [100,200,300,400];

function newArray(getArray) {
    return getArray[2]
}

console.log(newArray([900,400,300,2,89]))
