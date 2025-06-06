// Object litrals
const user = {
    username : 'sonu',
    loginCount :8,
    signId : true,

getUserDetails: function(){
    // console.log("Got user details from db");
    console.log(`username: ${this.username}`);
    console.log(this);
    
    
}
// / console.log(user.username)
// console.log(user.getUserDetails())
}
const user2 = {
    username : 'sonu',
    loginCount :8,
    signId : true,

getUserDetails: function(){
    // console.log("Got user details from db");
    console.log(`username: ${this.username}`);
    console.log(this);
    
    
}
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);   // because this is a global that's why showing the empty object


// Consturctor 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcom:${this.username}`);
        
    }

    return this  // if we miss that, by default is present also.
}

// const userOne =  User("hitesh", 12, true)  
// const userTwo =  User("ChaiAurCode", 11, false)  
// console.log(userOne); 
// here we are getting the overwritten value of the userTwo when i am console loging of the UserOne. to Over come this we are using the new keyword are also called the constructor below one is solution.


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);