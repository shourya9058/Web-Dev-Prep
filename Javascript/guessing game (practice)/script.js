let org = Math.floor(Math.random()*10)+1;
console.log(org);


let num = prompt("Guess the number: ");
while(num!=org){
    num = prompt("Nope, Try again buddy!");
}
console.log("Wohoooo! That's correct");


// Assignment solutions

// let person  = {
//     name : "shaurya",
//     age : 18,
//     city : "Moradabad"
// };
// let n = person.name;
// console.log(`Name of the person is ${person.name}`);

// person.city = "New York";
// person.country = "America";

// console.log(person);
