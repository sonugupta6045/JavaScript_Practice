// Array
// javascript array copy operation create shallow copies.
// shallow copy are those which may create a copy and them operation are applied on that array parllely appied on the original array also.
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made
const myArr = [ 0,3,4]

// console.log(myArr[0])
// myArr.push(7)  // push add the element to the ending of the array part
// console.log(myArr)
// myArr.pop();
// console.log(myArr);

// myArr.unshift(7) // it's also add the element but into the starting of the array. 
// myArr.shift();  to remove element form the staring of the array.
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);  // it's join the two array and convert into the strings.
// console.log( newArr);

// console.log(myArr)

// slice, splice

let A1 = [0,1,2,3,4,5]

console.log("A",A1)
const myA2 = A1.slice(1,4)  // it's cut that speficy part and print that one, but didn't changes into the original array.
console.log("B",myA2)

const myA3 = A1.splice(1,4) // it's Cut that speficiy part and print that once but include the part index also and change to original array.
console.log("c",myA3)

console.log("******")
console.log("A",A1)
console.log("B",myA2)
console.log("C",myA3)
console.log(A1)



