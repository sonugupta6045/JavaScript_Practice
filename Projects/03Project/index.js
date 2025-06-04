
const clock = document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  // clock.innerHTML = date.toUTCString();
},1000)
