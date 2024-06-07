// variables in javascript 
// let const var
// let muttable(changeable)
//const immutable 
// var muttable and we can access it from nestead scops but in let it is impossble 
let myname = "john"
myname = "Root"
console.log(myname)  // Root
const Mayname = "khan"
//Mayname = "Amir"  // impossible 
console.log(Mayname)//khan
var name = "khan"
name = "Amir"
console.log(name) // Amir

{   
    {
        var person = "person1"
        let letPerson = "letperson1"
        {
           var person = "person2"
           let letPerson = "letperson2"
           console.log(person) // person2
           console.log(letPerson) // letperson2
        }
        console.log(person) // person2
        console.log(letPerson) // letperson1
    }
}
// Data types
// primitive types
// string, number, boolean, undefined
const persoonname = "Ahmet"
console.log(typeof persoonname) // string 
const personage = 30
console.log(typeof personage) // number 
const isInstance = true 
console.log(typeof isInstance)  // boolean

// refererece type -> non-primitive 
// object and functions 
// objects
const somthing = null
const Person ={
    name: "person",
    age: 30,
    isAvrage: true ,
    notes: ["note1", "note2"],
    notessobj: {
        note1: "note1",
        note2: "note2",
    }

}
const person2 = Person;
person2.name = "Ahmed"
console.log(person2.name) //Ahmet
console.log(Person.notes[0]) // note1
console.log(Person.notessobj.note1) // note1
console.log(Array.isArray (Person.notessobj)) // is this array --> false 

//funtions
//the following ways are to define the functions
function f1(arg1, arg2) {
    console.log(arg1,arg2)
}

const f2 = function(arg1, arg2) {
    console.log(arg1,arg2)
}

const f3 = (arg1, arg2)=>{
    console.log(arg1, arg2)
}

f1(1,2)
f2(3,4)
f3(5,6)

// async -> don't wait 
console.log("first operation")
setTimeout(
    ()=>{
     console.log("secont operation")
    },
    3000,
);
console.log("thirth operation")
// first operation
// thirth operation
// secont operation
