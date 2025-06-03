// for loop

for (let i = 0; i < 10;i++) {
    // console.log(i);
}

for(let i=0;i<=10;i++){
    // console.log(`outerr loop ${i}`);
    
    for(let j=0;j<=10;j++){
        // console.log(`inner loop ${j}`);
        
    }
}

let myarray = ['superman','batman','flash']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}