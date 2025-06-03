// Control flow lecture

const isUserLogged = true
// const temp = 41
// if (temp) {
//     console.log("temp is less than 50")
// }else {
//     console.log("temp greater then 50")
// }

// comparsion operator
 // < , >, <=, >=, ==, !=, ===, !==

 // const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000;

// if(balance > 500) console.log("test"), console.log("second");  // do not do this type

// if (balance < 500) {
//     console.log("less then 500")
// }else if(balance < 750){
//     console.log("less then 500")
// }else if (balance < 900) {
//     console.log("less then 500")
// } else {
//     console.log("default")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}