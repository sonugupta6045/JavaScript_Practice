
// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task can complete here
//     setTimeout(function(){
//         console.log("aysnc task complete");
//         resolve();
        
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("promise consume");
    
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task completed')
        resolve()
    },1000)
}).then(function(){
console.log('consume promise');

})

// PromiseThree
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sonu",email:"abc@example.com"})
    },1000)
}).then(function(user){
    console.log(user)
    console.log(user.username)
    console.log(user.email)
})

// PromiseFour
// chaining of the .then keyword we are using into that one.

new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "sonu", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
}).then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"))

//PromiseFive

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
});

async function consumePromise(){
   try {
     const response = await PromiseFive
    console.log(response);
   } catch (err) {
    console.log(err);
    
   }
    
}

consumePromise()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>console.log(err))


