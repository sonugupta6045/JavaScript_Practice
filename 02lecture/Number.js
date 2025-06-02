const score = 400;

const balance = new Number(100.0004);
// console.log(score)
// console.log(typeof score)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 123.89654

// console.log(otherNumber.toPrecision(3))

const count = 1000000
// console.log(count.toLocaleString())
// console.log(count.toLocaleString("en-IN"))

// *****************MATH***************

// console.log(Math);
// console.log(Math.abs(-4))  // absolute value is convert the negative value into the positive value.
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));   // It's choosed the upper value like 4.2 convert to  5
// console.log(Math.floor(4.9)); // it's choosed the lower value 4.9 convert to 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // it's come between the 1 to  0
console.log((Math.random()*10) + 1); // it's 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)