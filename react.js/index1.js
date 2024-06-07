
// // using async
// async function main(){
//     console.log("first step")
//     // wait 2 secont and do the following operation
//     await wait(2000)
//     console.log("second step")
//     // wait 2 secont and do the following operation
//     await wait(2000)
//     console.log("thirth step")
// }

// const wait = (ms)=>{
//     return new Promise((resolve,reject )=>{
//           setTimeout(()=>{
//             resolve();
//           }, ms);
//         }
//   );
// };
// main()

// // Conditions 
// const isOveragent = (person)=> person.age >18;
// const person ={
//     name: "john Deo",
//     age: 16,
//     location: "USA"
// }

// if(isOveragent(person)){
//     console.log("you can by alcohol")
// }else{
//     console.log("you are under 18 you cannot buy!")
// }


// loops
// const wait = (ms)=>{
//     return new Promise((resolve,reject )=>{
//           setTimeout(()=>{
//             resolve();
//           }, ms);
//         }
//   );
// };

// async function main(){
//     // using for loop
//     for(let i = 0; true; i+=2){
//         console.log("Hello",i)
//         await wait(2000)
//     }
//     let i =0;
//     // print it infinity after 2sc
//     while(true){
//         console.log("Hello", i++)
//         await wait(2000)
//     }  
// }
// main()

// assign
const a = 10;
const b = 15;
let i = 0;
let k = (i = a + b);
console.log(k)  // 25

console.log(Number("15")- 5) // 10
console.log(null- 5) // -5
console.log(undefined- 5) // NaN

if("John"){  // true cuz its not empty
    console.log("John")
}

if(""){ // it is false cuz empty
    console.log("john")
}

// if(null) -> false 
//if(undefined) -> false 
// if(0)  -> flase
// if(-1)  -> true
//if(1) -> true
// ===  is equal ?

// spread
const person ={
    name: 'john',
    age: 25,
    isMarried: true,
    children: ['noeh', 'alex'],
    job: {
        title: 'frontend',
        company: {
            name: 'google',
            
            ceo: {
                name : 'sundar',
                age: 40,
            }
        }
    }
}
const person2 = {...person} //the person const info will not changed
//const person2 = structuredClone(person) // it is same with above code
//const person2 = person   // the person info can change
const {isMarried, ...theRestofperson} = person // print all without isMarried $ rest operator
console.log(theRestofperson)
person2.name = 'khan'
console.log(person) // name still john
console.log(person2) // name changed to khan


/*
{
  name: 'khan',
  age: 25,
  isMarried: true,
  children: [ 'noeh', 'alex' ],
  job: { title: 'frontend', company: { name: 'google', ceo: [Object] } }
} */