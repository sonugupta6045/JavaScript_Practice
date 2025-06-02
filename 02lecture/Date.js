// date

let mydate = new Date()

// console.log(mydate.toLocaleDateString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleTimeString())

// let myCreatedDate = new Date(2023, 0, 23)  // In javascript month are started from 0 to 11 that represent the jan to december.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // But when we using the String that time we are giving double digit count while be starting from 01 to 12 for jan to december.
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(myCreatedDate.getSeconds())
// console.log(Math.floor(myTimeStamp/1000))
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and Time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.getDay())

