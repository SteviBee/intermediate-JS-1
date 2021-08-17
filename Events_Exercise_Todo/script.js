// 1 - add new TODO by submitting form: 1a - take input, 1b - use input to create and append a li
// 2 - Mark a todo as complete - press button and chance text to strike thru?
// 3 - remove todo

window.onload = function () {
    let todoForm = document.getElementById("newTodoForm")
    let todoList = document.getElementById("todoList")

    todoForm.addEventListener("submit", function (event) {
        // stoping the default action of submit which is to refresh the page i believe
        event.preventDefault();
        // Creating the remove button:
        var removeButton = document.createElement("button");
        removeButton.innerText = "X";
        
        // get input
        let task = document.getElementById("task").value;

        // Create list item and add text from input to it
        let newTask = document.createElement("li")
        newTask.innerText = task;

        // push the newtask to the list & remove button
        todoList.appendChild(newTask);
        newTask.appendChild(removeButton);        

        // Reset form manually:
        todoForm.reset();
    })
    // Creating the strike thru & remove function 
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "li") {
            event.target.style.textDecoration = "line-through";
        } else if (event.target.tagName.toLowerCase() === "button") {
            event.target.parentNode.remove();
            
        }
    })
}

// PART 4 -_ LOCAL STORAGE
// UPDATE 7/30/21 - VERY HARD need to come back and understand what the answer did and I did not. Tought Problem for me. 

window.onload = function () {
    let todoForm = document.getElementById("newTodoForm")
    let todoList = document.getElementById("todoList")

    todoForm.addEventListener("submit", function (event) {
        // stoping the default action of submit which is to refresh the page i believe
        event.preventDefault();
        // Creating the remove button:
        var removeButton = document.createElement("button");
        removeButton.innerText = "X";
        
        // get input
        let lsInput = document.getElementById("task").value;

        // Checking if Obj in LS exist and acting if so / not
        let obj = localStorage.getItem("taskList");
        if (obj) {
            obj = JSON.parse(obj);
        } else {
            // create a new obj
            obj = {};
        }
        // Adding input to local storage, NOTE - key might be non unique and an issue
        function appendNewValue(name, value) {
            obj[name] = value;
            localStorage.setItem("taskList", JSON.stringify(obj));
        };

        // Calling function to add value:
        appendNewValue("todo", lsInput);     

        // Create list item and add text from input to it
        let lsNewTask = JSON.parse(localStorage.getItem("taskList"));
        console.log(lsNewTask);
        
        // Lopp through obj
        for (const key in lsNewTask) {

            let lsTask = document.createElement("li")
            lsTask.innerText = lsNewTask[key];
    
            // push the newtask to the list & remove button
            todoList.appendChild(lsTask);
            lsTask.appendChild(removeButton);             
        }
       

        // Reset form manually:
        todoForm.reset();
    })
    // Creating the strike thru & remove function 
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "li") {
            event.target.style.textDecoration = "line-through";
        } else if (event.target.tagName.toLowerCase() === "button") {
            event.target.parentNode.remove();
            
        }
    })
}
