// Roll Dice Practice Q2:

// function dice(){
//     let r = Math.floor(Math.random()*6)+1;

//     console.log(`The Dice shows ${r}`);
// }

// dice();


// Average of three numbers (functions with arguments):

// function average(a,b,c){
//     let avg = (a+b+c)/3;

//     console.log(`the average of these numbers is: ${avg}`);
// }

// average(15,32,18);

// Multiplication table of a given number:

function mult(n){
    for(let i=1;i<=10;i++){
        let mul = n*i;
        console.log(`${n} * ${i} = ${mul}`);
    }
}

        n = prompt("Enter the number: ");
        mult(n);