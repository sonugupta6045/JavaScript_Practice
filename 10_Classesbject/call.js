function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log(`Called`);
    
}

// call(thisArg: any, ...argArray: any[]): any. A list of arguments to be passed to the method.Calls a method of an object, substituting another object for the current object.

function createuser(username,email,password){
    SetUsername.call(this,username)   // here "this keyword are substisting another this keywords"

    this.email =email
    this.password = password
}

const sonu = new createuser("monu","anc@gmail.com","12344")
console.log(sonu);
