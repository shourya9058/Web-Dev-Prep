// Mera Code:

function randomClr(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    let clr = "rgb(" + a + "," + b + "," + c + ")";

    let div = document.getElementById('clrDiv');
    div.style.backgroundColor = clr;

    let h = document.getElementById('head');
    h.innerText = clr;
}

let btn = document.getElementById('btn');

btn.addEventListener("click",randomClr);

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});


// Apna College Code:


// let btn = document.getElementById('btn');

// btn.addEventListener("click",function(){
//     let clr = randomClr();
//     let div = document.getElementById('clrDiv');
//     div.style.backgroundColor = clr;

//     let h = document.getElementById('head');
//     h.innerText = clr;
// });



// function randomClr() {
//     let a = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let c = Math.floor(Math.random() * 256);
//     let clr = `rgb(${a},${b},${c})`;  // ✅ Correct spelling & removed semicolon
//     return clr;
// }

