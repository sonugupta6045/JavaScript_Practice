const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // in push add into the exsiting array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // it's return the new array after the concatnation
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // Now, we are using the spread method, because it's seperate the all element individually.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it's concat all the sub array and return into a new array..
console.log(real_another_array)



// console.log(Array.isArray("Hitesh"))  // checking the array 
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));