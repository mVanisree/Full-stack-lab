const task = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

addBtn.addEventListener("click", function(){
    const taskValue = task.value.trim()

    if(taskValue === ""){
        alert("Please Enter the task")
    }
    else{
        const taskItem = document.createElement("div")
        taskItem.textContent = taskValue;
        taskItem.classList.add("task-item");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        
       completeBtn.addEventListener("click", function(){
        taskItem.classList.toggle("completed");
       });

       deleteBtn.addEventListener("click", function(){
        taskItem.remove();

        if(taskList.children.length === 1){
            emptyMessage.style.display = "block";
        }
       });

       taskItem.appendChild(completeBtn);
       taskItem.appendChild(deleteBtn)

       taskList.appendChild(taskItem);

       emptyMessage.style.display = "none";

       task.value = "";
    }
});