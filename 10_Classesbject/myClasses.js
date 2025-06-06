//ES6

class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const sonu = new user("user1","user@gmail.com","1234")

console.log(sonu.encryptPassword());
