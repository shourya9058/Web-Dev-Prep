let btn = document.getElementById("btn");

let input = document.querySelector("input");
let ul = document.getElementById("ul");

function addTask() {
  let li = document.createElement("li");

  li.textContent = input.value;

  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("btn");
  del.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(del);
  ul.appendChild(li); // Append new <li> to the <ul>
  input.value = "";
}

btn.addEventListener("click", addTask);

// Event listener for Enter key
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask(); // Call the addTask function
  }
});

// Apna Colleg Code:

// let btn = document.getElementById('btn');
// let input = document.querySelector('input');
// let ul = document.getElementById('ul');

// btn.addEventListener("click", function(){
//     let item = document.createElement('li');
//     item.innerText = input.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     input.value = "";
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Deleted!");
//     }
// })
