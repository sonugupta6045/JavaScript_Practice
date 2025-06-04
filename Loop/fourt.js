// object
// for object we are used the for-in loop
// for array we are used the for-of loop
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

for (const key in myObject) {
//   console.log(key);
  
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()   // map are not directly iteration
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

