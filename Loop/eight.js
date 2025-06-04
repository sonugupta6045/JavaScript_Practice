// reduce 
const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc,currval) {
//     console.log(`acc value ${acc}`);
//     console.log(`current val are ${currval}`);
    
//     return acc + currval;
// }, 0 )

const mytotal = mynums.reduce((acc,currval) => acc+currval,0)

// console.log(mytotal);

const shoppingcart = [
    {
        itemName : 'js course',
        price : 199,
    },
    {
        itemName : 'java course',
        price : 99,
    },
      {
        itemName : 'python course',
        price : 1199,
    },
      {
        itemName : 'cpp course',
        price : 999,
    },
]

const pricetoPay = shoppingcart.reduce((acc, iteam)=>acc+iteam.price, 0)

console.log(pricetoPay);
