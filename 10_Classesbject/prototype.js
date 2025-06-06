let myName = "Sonu     ";

// console.log(myName.truelength)


let myHeros = ['thor','ironman','spiderman']

let heroPower = {
    thor : "hammer",
    spiderman : "web",

    getSpiderPower : function(){
        console.log(`Spidy power id ${this.spiderman}`);
        
    }
}
 // we are try to insert method into the directly object so when we are calling string,array and object that time we can called.
Object.prototype.sonu =function(){   
    console.log(` SOnu is present in all objexts`);
    
}
Array.prototype.two = function(){
    console.log(`Know is only avaiable into the array.`);
    
}

// heroPower.sonu();
// myHeros.two()
// myName.two()


// inheritance

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

// morden syntax
Object.setPrototypeOf(Teacher,TeachingSupport)

let anotherUsername = "SonuGUpta      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"shubham".trueLength()