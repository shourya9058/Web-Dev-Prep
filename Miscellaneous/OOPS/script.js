//Factory function i.e., kisi new cheez ko create krne k liye bnate h but inko itna use nhi krte cause yeh hrr function ki alg copy bnaenge hrr naye object k liye instead of using the same function everywhere, isse accha hum "new" operator use krke bnate h(neeche samjha rakha h)



// function personMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hello, My name is ${name}`);
//         },
//     };
//     return person;
// };

//By using Contructors : hamesha capital letter se start hoga, kuch bhi return nhi krega
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// };

// //if we want to add a function:
// Person.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
// }

// let p1 = new Person("shaurya",21); //aise new object bnaya jaega
//new keyword/operator hume instance(copy) bnane k liye allow krta h kisi user defined ya built in object type constructor function ka


//Isse bhi better method h by using classes:

// classes are templates for creating objects
//isme hum constructor keyword ka use krenge aur yeh bhi same captial letter se start hote but isme hum class k andar hi fucntion likh skte h

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }

// let p1 = new Person("shaurya",21);



// Inheritance: whi same properties copy krna from the parent or base class

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age); //parent class ka constructor is being called
        this.marks = marks;
    }
    //talk method ko use kren k liye likhne ki need nhi h
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age); //parent class ka constructor is being called
        this.subject = subject;
    }
    //talk method ko use kren k liye likhne ki need nhi h
}


