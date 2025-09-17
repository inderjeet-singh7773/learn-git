// function banayege addTask() 
function addTask() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText === "") return;


    // Checkbox for marking completion
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        li.classList.toggle("completed");
        updateTaskCount();
    }; 

    
    // naya list banayegi
    let li = document.createElement("li");  
    li.classList.add("task");
    
    // span hai jo textko hold rakhega
    let span = document.createElement("span");  
    span.textContent = taskText;

    // edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        let newText = prompt("Edit your task:", span.textContent);
        if (newText !== null) {
            span.textContent = newText;
        }
    };
    

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };
    

    // list me task add kara raha hai
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}