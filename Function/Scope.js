// Scope like global and local scope

//  var c =100
if (true) {
let a =10;
const b=20
// var c =30
}

//   console.log(a) // can't acces beacuse it's present into the block 
    // console.log(b)   // same 
    // console.log(c)  // thier is issue with the var so it access any where 


function One() {
    const username = "SOnu"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}
// One()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

