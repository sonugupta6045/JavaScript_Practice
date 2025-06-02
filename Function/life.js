// Immediately Invoke function Expression (IIfE)

(
function One() {
    //named IIFE
    console.log("DB connected")
})();

( (name)=>{
    //unnamed IIFE
    console.log(`my name is ${name} `)
})("sonu")

// ()()// forst parasenties are used to wrap the function and second one used for the execute that one.

//  IIFE which are those function which execute immediately and
// some time global scope creare a poluation to reduce that polution we areusing that IIFE 



