// class
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.sayHello2=()=>{
            console.log('Hello2, I am ' + this.name);
        }
    }

    sayHello(){
        console.log('Hello, I am ' + this.name);
    }
    setName(name) {
        this.name = name;
        // this.sayHello
    }

}

const person1 =  new Human('John', 30);
const person2 = new Human('Anna',20);
person1.setName('root')
console.log(person1.name)
console.log(person1.sayHello === person2.sayHello) // true 
console.log(person1.sayHello2 === person2.sayHello2) // false cuz everytime class called it take place in memory sepratly

