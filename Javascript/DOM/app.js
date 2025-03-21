// Practice Question:

const { Underline } = require("lucide-react");

// let para = document.createElement('p');
// para.innerText="Hi! I'm Red!";

// document.querySelector("body").append(para);

// para.style.color = "red";

// let h = document.createElement('h3');
// h.innerText="Hi! I'm Blue H3!";

// document.querySelector("body").append(h);

// h.style.color = "blue";

// let d = document.createElement("div");
// document.querySelector("body").append(d);
// d.style.backgroundColor = "pink";
// d.style.border = "2px solid black";

// let hin = document.createElement("h3");
// hin.innerText = "I'm in a div";
// hin.style.color = "blue";

// let pin = document.createElement("p");
// pin.innerText = "Me too!";

// d.append(hin);
// d.append(pin);

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Assignment 1:
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click Me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

input.placeholder = "Username";
btn.setAttribute('id','btn');

let b = document.getElementById('btn');

b.style.backgroundColor = "blue";
b.style.color = "white";

let h = document.createElement('h1');
h.innerText = "DOM Practice";
h.style.textDecoration = "Underline";
h.style.color = "purple";

document.querySelector('body').append(h);
