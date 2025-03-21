// Q1: 

// function large(curr,n){
//     let ans = [];
//     for(let i =0;i<curr.length;i++){
//         if(curr[i]>n){
//             ans.push(curr[i]);
//         }
//     }
//     return ans;
// }
// let curr = [5,6,9,8,4,1,3,2];
// console.log(large(curr,3));

// Q2:

// function removeDuplicate(curr){
//     let ans = "";
//     for(let i=0;i<curr.length;i++){
//         let currElement = curr[i];
//         if(ans.indexOf(currElement)==-1){
//             ans+=currElement;
//         }
//         else{
//             continue;
//         }
//     }
//     return ans;
// }
// let curr = "absgcjfhhdjsldhfkrbvhvadask";
// console.log(removeDuplicate(curr));

// Q3:

// function longestCountry(curr){
//     let ans;
//     let longest = 0;
//     for(let i=0;i<curr.length;i++){
//         if(country[i].length>=longest){
//             longest = country[i].length;
//             ans = country[i];
//         }    
// }
// return ans;
// }

// let country=["Aucurralia","Germany","United States of America"];
// console.log(longestCountry(country));

Q4:

// function countVowels(str){
//     let count = 0;
//     for(character of str){
//         let curr = character;
//         if(curr == 'i' || curr == 'a' || curr=='o' || curr=='u' || curr=='e'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("abcgiekabue"));

Q5:

function rand(start,end){
    let diff = end - start;
    let r = Math.floor(Math.random()*diff)+start;
    console.log(`The random number between ${start} & ${end} is ${r}`);
}

rand(11,20);

// Practice Questions:

// const square = (n)=>{
//     console.log(n**2);
// }


// let id = setInterval(()=>{console.log("Hello World")},2000);

// setTimeout(()=>{clearInterval(id)},10000);

// let arr = [1,2,3,4,5];

// Assignment questions:

// const average = (arr) =>{
//     let avg = 0;
//     for(let i=0;i<arr.length;i++){
//         avg+= arr[i];
//     }
//     avg = avg/arr.length;
//     console.log(avg);
// }


const even = n =>{
    if(n%2==0){
        console.log(`${n} is even`);
    }
    else{
        console.log(`${n} is odd`);
    }
}