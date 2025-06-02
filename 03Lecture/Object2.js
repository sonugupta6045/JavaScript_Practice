// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regulaeruser = {
    email : "sonu@gmail.com",
    fullName : {
        userfullname : {
            fname : "sonu",
            lname : "Gupta",
        }
    }
}

// console.log(regulaeruser.fullName)
// console.log(regulaeruser.fullName.userfullname)
// console.log(regulaeruser.fullName.userfullname.fname);

const obj1 = {1:"a",2:"b" }
const obj2 = {3:"ad",4:"c" }
const obj3 = {5:"f",6:"e"}
// const obj = {obj1, obj2}  // it's not proper method
// const objs = Object.assign({},obj1,obj2,obj3) // concate all the object into one object and return into single objects
const objs = {...obj1, ...obj2, ...obj3}
// console.log(objs)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // this method is used to check the avaiablitiy of the perporty into that object.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // de-structure  

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

