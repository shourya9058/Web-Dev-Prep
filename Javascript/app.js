// Question 1

// let num = 11;
// if(num%10==0){
//     console.log("Good Number");
// }
// else{
//     console.log("Not a Good Number");
// }

// Question 2

// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");

// console.log(`${name} is ${age} years old`);

// Question 3

// let a=3;
// let b=7;
// let c=1;

// if(a>b && a>c) console.log("a is greatest");
// else if(b>a && b>c) console.log("b is greatest");
// else console.log("c is greatest");

// Question 4
// let a = 32;
// let b = 1556562;

// if(a%10 == b%10 ){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// let msg = "help";
// let ans = msg.trim().toUpperCase();

// console.log(ans);

// 

// let arr = ["january","july","march","august"];
// arr.shift();
// arr.shift();
// // arr[1]="june";
// arr.unshift("june");
// arr.unshift("july");
// console.log(arr);

// arr.splice(0,1);
// arr.splice(1,0,"june");
// console.log(arr);

// let arr = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
// arr[0][1]= "O";
// console.log(arr);

// let n = prompt("enter the number:")
// for(let i=1;i<=10;i++){
//     let a = n*i;
//         console.log(`${n} * ${i} = ${a}`);
// }

// const movie = prompt("Guess the movie");

// while((movie!= "Fight Club") && (movie != "quit")){
//         movie = prompt("Try again");
// }

// console.log("bingo! correct guess");

// let num = 287152;
// let count = 0;
// while(num!=0){
//         count++;
//         num = Math.floor(num/10);
// }
// console.log(count);

// let num = 287152;
// let sum = 0;
// while(num!=0){
//         let n = num%10;
//         sum+=n;
//         num = Math.floor(num/10);
// }
// console.log(sum);


// Maximum of an array using reduce method:

// let arr = [1,6,8,7,5,9,4,6,5,4,6,11];

// let final = arr.reduce((res,el)=>{
//     let max=0;
//     console.log(res);
//     if(res>=el){
//         max = res;
//     }
//     else{
//         max = el;
//     }
//     return max;
// })

// Check if all the numbers are multiples of 10 or not using every method:

// let arr = [1,6,8,7,5,9,4,6,5,4,6,11];

// let ans = arr.every((el)=> el%10==0) 
// True sirf tbhi return krega jb saare elements k liye yeh condition true hogi werna false return krega


