class User {
    constructor(usernmae){
        this.usernmae = usernmae
    }

    logMe(){
        console.log(`user name is ${this.usernmae}`);
        
    }

   static createId(){
        return '123'
    }
}

const sonu = new User("sonu1")
console.log(sonu.createId());
