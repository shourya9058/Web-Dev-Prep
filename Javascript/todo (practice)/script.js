let todo = [];

let task = prompt("Enter the task you want to perform: ");

while(true){
    if(task == "add"){
        let newtask = prompt("Enter the task you want to add: ");
        todo.push(newtask);
        console.log("Task added!");
    }
    else if(task == "list"){
        console.log("-------------------------------------");
        console.log("Current task list:");
        console.log("-------------------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------------------------");
    }
    else if(task == "replace"){
        let idx = prompt("Enter the index of the task you want to replace: ");
        let newtask = prompt("Enter the new task you want to add to this place: ");
                todo.splice(idx,1,newtask);
                console.log("task replaced!")
        }
    else if(task == "delete"){
        let del = prompt("Enter the index of task you want to delete:");
                todo.splice(del,1);
                console.log("task deleted!")
        }
    else if(task == "quit"){
        console.log("Quiting App....");
        break;
    }
    else{
        console.log("Invalid request!");
    }

    task = prompt("Enter the task you want to perform: ");
}