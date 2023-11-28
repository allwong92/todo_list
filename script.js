function addTask() {

    // get the input field and task list elements
    let taskInput = document.getElementById("new-task");
    let taskList = document.getElementById("incomplete-tasks");
    let newBox = document.createElement("input");
    let newText = document.createElement("label");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    console.log('taskInputs value: ', taskInput.textContent);
    
    // check if input field is not empty or contains only whitespace
    if (taskInput.value.trim() != "") {
        
        // create a new list item
        let li = document.createElement("li");
        newBox.setAttribute("type", "checkbox");

        
        // add the new checkbox to list item
        li.appendChild(newBox);

        newText.innerText = taskInput.value;

        // add the task text to the list item
        li.appendChild(newText);

        editButton.setAttribute("class", "edit");
        editButton.innerText = "Edit";
        li.appendChild(editButton);

        deleteButton.setAttribute("class", "delete");
        deleteButton.innerText = "Delete";
        li.appendChild(deleteButton);

        // display the list item to the task list
        taskList.appendChild(li);

        // clear the input field
        taskInput.value ="";
    }
}

// delete task functionality