const myNums = [1,2,3,4,5,67,8,9]

// const mewNum = myNums.map( (num) => {
// return num +10
// })
// console.log(mewNum);

// chaining method 

const newMuns = myNums
                .map((num)=>num*10).map((num)=>num+2).filter((num)=>num>=40);


console.log(newMuns);

