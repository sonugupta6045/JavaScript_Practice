const useremail = "sonu@gmail.com";

if (useremail) {
    console.log("got user email")
}else {
    console.log("dn't have user email");
    
}

// all this are false value 
// false, 0,-0, bigInt 0n, null, undefind, NaN, ""

// truthly value
// "0", 'false', " ", [], {}, function(){}

// const arr = []
// if (arr.length === 0) {
//     console.log("array is empty");
    
// }


// const obj = {
//     name : "sone",
//     age : 34,
// }

// console.log(Object.keys(obj.name));

// if (Object.keys(obj).length===0) {
//     console.log("object is empty");
    
// }

// **********************************************

// Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  // it's used to over come the null and with respect to their code structure. 
// val1 = undefined ?? 5 // it;'s only for th enull and undefined.
// val1 = null ?? 10 ?? 20

// console.log(val1);

// terniary operator

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
